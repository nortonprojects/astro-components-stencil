import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/filter-9-plus.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-filter-9-plus',
  shadow: false,
})
export class RuxIconFilter9Plus {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#filter-9-plus`}></use>
      </svg>
    );
  }
}
