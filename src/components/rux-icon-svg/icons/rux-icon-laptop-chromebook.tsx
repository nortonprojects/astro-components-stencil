import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/laptop-chromebook.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-laptop-chromebook',
  shadow: false,
})
export class RuxIconLaptopChromebook {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#laptop-chromebook`}></use>
      </svg>
    );
  }
}
