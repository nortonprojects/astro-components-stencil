import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/mood-bad.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-mood-bad',
  shadow: false,
})
export class RuxIconMoodBad {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#mood-bad`}></use>
      </svg>
    );
  }
}
