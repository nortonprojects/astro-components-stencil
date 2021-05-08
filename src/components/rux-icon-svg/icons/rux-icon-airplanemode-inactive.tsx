import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/airplanemode-inactive.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-airplanemode-inactive',
  shadow: false,
})
export class RuxIconAirplanemodeInactive {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#airplanemode-inactive`}></use>
      </svg>
    );
  }
}
