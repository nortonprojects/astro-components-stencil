import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/flare.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-flare',
  shadow: false,
})
export class RuxIconFlare {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#flare`}></use>
      </svg>
    );
  }
}
