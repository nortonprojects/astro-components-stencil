import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/snooze.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-snooze',
  shadow: false,
})
export class RuxIconSnooze {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#snooze`}></use>
      </svg>
    );
  }
}
