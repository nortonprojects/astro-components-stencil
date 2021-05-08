import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/battery-charging-full.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-battery-charging-full',
  shadow: false,
})
export class RuxIconBatteryChargingFull {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#battery-charging-full`}></use>
      </svg>
    );
  }
}
