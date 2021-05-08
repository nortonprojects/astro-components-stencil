import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/offline-pin.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-offline-pin',
  shadow: false,
})
export class RuxIconOfflinePin {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#offline-pin`}></use>
      </svg>
    );
  }
}
