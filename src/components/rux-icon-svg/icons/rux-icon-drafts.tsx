import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/drafts.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-drafts',
  shadow: false,
})
export class RuxIconDrafts {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#drafts`}></use>
      </svg>
    );
  }
}
