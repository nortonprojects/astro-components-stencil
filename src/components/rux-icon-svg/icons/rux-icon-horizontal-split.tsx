import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/horizontal-split.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-horizontal-split',
  shadow: false,
})
export class RuxIconHorizontalSplit {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#horizontal-split`}></use>
      </svg>
    );
  }
}
