import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/satellite-transmit.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-satellite-transmit',
  shadow: false,
})
export class RuxIconSatelliteTransmit {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#satellite-transmit`}></use>
      </svg>
    );
  }
}
