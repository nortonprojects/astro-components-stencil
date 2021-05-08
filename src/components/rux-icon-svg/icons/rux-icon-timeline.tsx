import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/timeline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-timeline',
  shadow: false,
})
export class RuxIconTimeline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#timeline`}></use>
      </svg>
    );
  }
}
