import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/delete.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-delete',
  shadow: false,
})
export class RuxIconDelete {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#delete`}></use>
      </svg>
    );
  }
}
