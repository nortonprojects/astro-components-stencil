import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/plus-one.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-plus-one',
  shadow: false,
})
export class RuxIconPlusOne {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#plus-one`}></use>
      </svg>
    );
  }
}
