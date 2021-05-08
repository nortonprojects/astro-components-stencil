import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/sort.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-sort',
  shadow: false,
})
export class RuxIconSort {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#sort`}></use>
      </svg>
    );
  }
}
