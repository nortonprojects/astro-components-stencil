import { Component, Prop, h } from '@stencil/core'
import svgIcon from '../../../icons/airplanemode-active.svg'

/**
     * WARNING: This is an autogenerated component.
     * Do not make any changes to this file or they will be overwritten on build.
     * The template for this file is located in the generate-icons.js util file.
     * /

    /** @internal **/
@Component({
    tag: 'rux-icon-airplanemode-active',
    shadow: false,
})
export class RuxIconAirplanemodeActive {
    @Prop() color: string
    @Prop() icon: string
    @Prop() size: 'extra-small' | 'small' | 'normal' | 'large'

    render() {
        const style = {
            fill: this.color,
        }
        return (
            <div
                class={`rux-icon--${this.size}`}
                style={style}
                innerHTML={svgIcon}
            ></div>
        )
    }
}
