import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/assignment-late.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-assignment-late',
  shadow: false,
})
export class RuxIconAssignmentLate {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#assignment-late`}></use>
      </svg>
    );
  }
}
