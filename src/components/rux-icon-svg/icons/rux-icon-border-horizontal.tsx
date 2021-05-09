import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/border-horizontal.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-border-horizontal',
  shadow: false,
})
export class RuxIconBorderHorizontal {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#border-horizontal`}></use>
      </svg>
    );
  }
}
