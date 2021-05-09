import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/block.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-block',
  shadow: false,
})
export class RuxIconBlock {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#block`}></use>
      </svg>
    );
  }
}
