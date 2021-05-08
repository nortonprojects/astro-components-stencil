import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard',
  shadow: false,
})
export class RuxIconKeyboard {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard`}></use>
      </svg>
    );
  }
}
