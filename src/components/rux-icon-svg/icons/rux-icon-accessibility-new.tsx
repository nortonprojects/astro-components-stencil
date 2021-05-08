import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/accessibility-new.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-accessibility-new',
  shadow: false,
})
export class RuxIconAccessibilityNew {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#accessibility-new`}></use>
      </svg>
    );
  }
}
