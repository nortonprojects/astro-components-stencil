import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/speaker-notes-off.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-speaker-notes-off',
  shadow: false,
})
export class RuxIconSpeakerNotesOff {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#speaker-notes-off`}></use>
      </svg>
    );
  }
}
