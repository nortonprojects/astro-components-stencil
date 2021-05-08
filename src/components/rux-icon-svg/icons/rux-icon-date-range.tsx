import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/date-range.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-date-range',
  shadow: false,
})
export class RuxIconDateRange {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#date-range`}></use>
      </svg>
    );
  }
}
