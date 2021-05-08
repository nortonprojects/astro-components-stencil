import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/fiber-pin.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-fiber-pin',
  shadow: false,
})
export class RuxIconFiberPin {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#fiber-pin`}></use>
      </svg>
    );
  }
}
