import {
    Component,
    Host,
    h,
    Prop,
    Element,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core'

@Component({
    tag: 'rux-slider',
    styleUrl: 'rux-slider.scss',
    shadow: true,
})
export class RuxSlider {
    /**
     * Min value of the slider.
     */
    @Prop() min?: number = 0
    /**
     * Max value of slider.
     */
    @Prop() max?: number = 100
    /**
     *
     * Step amount of slider value.
     */
    @Prop() step?: number = 1
    /**
     * Current value of the slider. The default value is halfway between the specified minimum and maximum. - [HTMLElement/<input type="range">](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range)
     */
    @Prop({ mutable: true }) value?: number =
        (this.max! - this.min!) / 2 + this.min!
    /**
     *
     * Determines if the slider is disabled.
     */
    @Prop({ reflect: true }) disabled?: boolean = false
    /**
     * Fired when the value of the input changes - [HTMLElement/input_event](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event)
     */
    @Event({ eventName: 'rux-input' }) ruxInput!: EventEmitter

    componentWillLoad() {
        this._updateValue()
        this._getBrowser(navigator.userAgent.toLowerCase())
    }

    connectedCallback() {
        this.onInput = this.onInput.bind(this)
    }
    @Element() el!: HTMLInputElement

    @Watch('value')
    @Watch('min')
    @Watch('max')
    handleChange() {
        this._updateValue()
    }

    _updateValue() {
        // If min is not a number, change it to 0
        if (!this.min && this.min != 0) {
            this.min = 0
        }
        //If max is not a number, change it to 100
        if (!this.max && this.max != 0) {
            this.max = 100
        }
        // If value is not a number, change it to default.
        if (!this.value && this.value != 0) {
            this.value = (this.max - this.min) / 2 + this.min
        }
        //If step is not a number, change it to 1
        if (!this.step) {
            this.step = 1
        }
        //Min can't be >= max
        if (this.min >= this.max) {
            this.min = this.max - this.step
        }
        // If min is given and is greater than value, then set value to the min.
        if (this.value < this.min) {
            this.value = this.min
        }
        //If max is given and is less than value, set value to max
        if (this.max < this.value) {
            this.value = this.max
        }

        this._setValuePercent()
    }
    //Sets the --valuePercent CSS var
    _setValuePercent() {
        const dif = ((this.value! - this.min!) / (this.max! - this.min!)) * 100
        this.el.style.setProperty('--valuePercent', `${dif}%`)
    }
    onInput(e: Event) {
        const target = e.target as HTMLInputElement
        this.value = parseInt(target.value)
        this._setValuePercent()
        this.ruxInput.emit()
    }
    //Safari needs 0px top for the thumb to look normal.
    _getBrowser(ua: string) {
        if (ua.indexOf('safari') > -1 && ua.indexOf('chrome') == -1) {
            this.el.style.setProperty('--top', '0px')
        }
    }

    render() {
        const { min, max, value, step, disabled, onInput } = this
        return (
            <Host>
                <div class="rux-slider">
                    <input
                        onInput={onInput}
                        type="range"
                        class="rux-range"
                        min={min}
                        max={max}
                        value={value}
                        step={step}
                        disabled={disabled}
                        aria-label="slider"
                        aria-disabled={disabled ? 'true' : 'false'}
                    ></input>
                </div>
                <slot></slot>
            </Host>
        )
    }
}
