import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/repeat-one.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-repeat-one',
  shadow: false,
})
export class RuxIconRepeatOne {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#repeat-one`}></use>
      </svg>
    );
  }
}
