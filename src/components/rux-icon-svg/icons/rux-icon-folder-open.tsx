import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/folder-open.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-folder-open',
  shadow: false,
})
export class RuxIconFolderOpen {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#folder-open`}></use>
      </svg>
    );
  }
}
