import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/crop-5-4.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-crop-5-4',
  shadow: false,
})
export class RuxIconCrop54 {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#crop-5-4`}></use>
      </svg>
    );
  }
}
