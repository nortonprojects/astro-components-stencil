import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/local-airport.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-local-airport',
  shadow: false,
})
export class RuxIconLocalAirport {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#local-airport`}></use>
      </svg>
    );
  }
}
