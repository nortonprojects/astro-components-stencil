import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/extension.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-extension',
  shadow: false,
})
export class RuxIconExtension {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#extension`}></use>
      </svg>
    );
  }
}
