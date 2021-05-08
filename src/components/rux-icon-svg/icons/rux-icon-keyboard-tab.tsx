import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/keyboard-tab.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-keyboard-tab',
  shadow: false,
})
export class RuxIconKeyboardTab {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#keyboard-tab`}></use>
      </svg>
    );
  }
}
