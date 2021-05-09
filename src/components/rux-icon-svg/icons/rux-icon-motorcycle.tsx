import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/motorcycle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-motorcycle',
  shadow: false,
})
export class RuxIconMotorcycle {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#motorcycle`}></use>
      </svg>
    );
  }
}
