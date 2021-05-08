import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/work.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-work',
  shadow: false,
})
export class RuxIconWork {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#work`}></use>
      </svg>
    );
  }
}
