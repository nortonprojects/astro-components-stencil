import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flash-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flash-off',
  shadow: false,
})
export class RuxIconFlashOff {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flash-off`}></use>
      </svg>
    );
  }
}
