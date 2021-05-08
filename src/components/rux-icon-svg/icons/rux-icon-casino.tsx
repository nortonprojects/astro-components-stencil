import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/casino.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-casino',
  shadow: false,
})
export class RuxIconCasino {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#casino`}></use>
      </svg>
    );
  }
}
