import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/gif.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-gif',
  shadow: false,
})
export class RuxIconGif {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#gif`}></use>
      </svg>
    );
  }
}
