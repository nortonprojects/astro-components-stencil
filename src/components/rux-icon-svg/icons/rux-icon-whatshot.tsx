import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/whatshot.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-whatshot',
  shadow: false,
})
export class RuxIconWhatshot {
  @Prop() size: string;
  @Prop() viewBox: string;
  @Prop() color: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.color} rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#whatshot`}></use>
      </svg>
    );
  }
}
