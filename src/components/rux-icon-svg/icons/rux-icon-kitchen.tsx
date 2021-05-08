import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/kitchen.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-kitchen',
  shadow: false,
})
export class RuxIconKitchen {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#kitchen`}></use>
      </svg>
    );
  }
}
