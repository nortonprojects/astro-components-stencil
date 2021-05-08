import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/person-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-person-outline',
  shadow: false,
})
export class RuxIconPersonOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#person-outline`}></use>
      </svg>
    );
  }
}
