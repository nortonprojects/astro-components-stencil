import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hourglass-full.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hourglass-full',
  shadow: false,
})
export class RuxIconHourglassFull {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hourglass-full`}></use>
      </svg>
    );
  }
}
