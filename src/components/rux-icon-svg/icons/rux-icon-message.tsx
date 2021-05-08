import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/message.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-message',
  shadow: false,
})
export class RuxIconMessage {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#message`}></use>
      </svg>
    );
  }
}
