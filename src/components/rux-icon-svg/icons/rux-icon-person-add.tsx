import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/person-add.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-person-add',
  shadow: false,
})
export class RuxIconPersonAdd {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#person-add`}></use>
      </svg>
    );
  }
}
