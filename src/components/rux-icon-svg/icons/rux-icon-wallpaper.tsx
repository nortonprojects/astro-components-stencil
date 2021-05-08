import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/wallpaper.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-wallpaper',
  shadow: false,
})
export class RuxIconWallpaper {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#wallpaper`}></use>
      </svg>
    );
  }
}
