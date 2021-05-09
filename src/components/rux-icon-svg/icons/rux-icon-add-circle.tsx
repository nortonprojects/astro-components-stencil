import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/add-circle.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-add-circle',
  shadow: false,
})
export class RuxIconAddCircle {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#add-circle`}></use>
      </svg>
    );
  }
}
