import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/spa.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-spa',
  shadow: false,
})
export class RuxIconSpa {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#spa`}></use>
      </svg>
    );
  }
}
