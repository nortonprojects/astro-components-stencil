import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/antenna-receive.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-antenna-receive',
  shadow: false,
})
export class RuxIconAntennaReceive {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#antenna-receive`}></use>
      </svg>
    );
  }
}
