import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mic-none.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mic-none',
  shadow: false,
})
export class RuxIconMicNone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mic-none`}></use>
      </svg>
    );
  }
}
