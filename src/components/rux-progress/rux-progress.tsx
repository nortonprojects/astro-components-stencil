import { Component, Host, h, Prop, Watch } from '@stencil/core'

@Component({
    tag: 'rux-progress',
    styleUrl: 'rux-progress.scss',
    shadow: true,
})
export class RuxProgress {
    /**
     * Current progress value between 0 and 100 (or the max, if defined below).
     */
    @Prop({ mutable: true }) value?: number
    /**
     * For progress bars where progress bars have a maximum value greater or less than 100
     */
    @Prop({ mutable: true }) max: number = 100
    /**
     * Displays text output of progress as a percentage. Note: when using a max value other than 100 output is displated as value/max (e.g., 1450/2000)
     */
    @Prop({ attribute: 'hide-label', mutable: true }) hideLabel: boolean = false

    getProgressAsString() {
        // If max = '', just return the value.
        if (!this.max) {
            return this.value
        }

        if (this.value === undefined) {
            return '0%'
        } else {
            return this.max === 100
                ? `${this.value}%`
                : `${this.value}/${this.max}`
        }
    }
    checkValueNotOverMax(max: number, value: number) {
        if (max && max < value) {
            max = value
            this.max = max
            console.warn(
                'The given max for <rux-progress> was less than the given value. Max has been changed to equal value in the meantime. Please be sure max and value are correct on the <rux-progress> component.'
            )
        }
    }
    connectedCallback() {
        if (this.value) {
            this.checkValueNotOverMax(this.max, this.value)
        }
    }
    @Watch('value')
    watchHandler() {
        if (this.value) {
            this.checkValueNotOverMax(this.max, this.value)
        }
    }
    render() {
        return (
            <Host>
                {this.value != undefined ? (
                    [
                        <progress
                            class="rux-progress"
                            value={this.value}
                            max={this.max}
                        ></progress>,
                        <output
                            class="rux-progress__value"
                            hidden={this.hideLabel}
                        >
                            {this.getProgressAsString()}
                        </output>,
                    ]
                ) : (
                    <progress class="rux-progress"></progress>
                )}

                <slot></slot>
            </Host>
        )
    }
}
