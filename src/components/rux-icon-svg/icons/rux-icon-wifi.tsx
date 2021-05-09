import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wifi.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wifi',
  shadow: false,
})
export class RuxIconWifi {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wifi`}></use>
      </svg>
    );
  }
}
