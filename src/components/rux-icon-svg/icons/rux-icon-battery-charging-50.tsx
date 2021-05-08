import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-charging-50.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-charging-50',
  shadow: false,
})
export class RuxIconBatteryCharging50 {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-charging-50`}></use>
      </svg>
    );
  }
}
