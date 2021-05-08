import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/skip-previous.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-skip-previous',
  shadow: false,
})
export class RuxIconSkipPrevious {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#skip-previous`}></use>
      </svg>
    );
  }
}
