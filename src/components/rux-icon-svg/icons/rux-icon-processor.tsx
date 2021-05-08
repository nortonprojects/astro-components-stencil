import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/processor.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-processor',
  shadow: false,
})
export class RuxIconProcessor {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#processor`}></use>
      </svg>
    );
  }
}
