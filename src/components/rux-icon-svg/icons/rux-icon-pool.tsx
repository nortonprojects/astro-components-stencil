import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/pool.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-pool',
  shadow: false,
})
export class RuxIconPool {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#pool`}></use>
      </svg>
    );
  }
}
