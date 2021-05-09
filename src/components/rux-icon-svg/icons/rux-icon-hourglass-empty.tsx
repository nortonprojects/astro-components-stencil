import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/hourglass-empty.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-hourglass-empty',
  shadow: false,
})
export class RuxIconHourglassEmpty {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#hourglass-empty`}></use>
      </svg>
    );
  }
}
