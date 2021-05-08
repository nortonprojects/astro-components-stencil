import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/solar.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-solar',
  shadow: false,
})
export class RuxIconSolar {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#solar`}></use>
      </svg>
    );
  }
}
