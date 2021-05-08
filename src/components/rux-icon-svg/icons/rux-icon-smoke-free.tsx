import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/smoke-free.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-smoke-free',
  shadow: false,
})
export class RuxIconSmokeFree {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#smoke-free`}></use>
      </svg>
    );
  }
}
