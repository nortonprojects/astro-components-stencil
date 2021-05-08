import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/speaker-group.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-speaker-group',
  shadow: false,
})
export class RuxIconSpeakerGroup {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#speaker-group`}></use>
      </svg>
    );
  }
}
