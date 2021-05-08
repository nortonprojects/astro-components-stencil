import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/archive.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-archive',
  shadow: false,
})
export class RuxIconArchive {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#archive`}></use>
      </svg>
    );
  }
}
