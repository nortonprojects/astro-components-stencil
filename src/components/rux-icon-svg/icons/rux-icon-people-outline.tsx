import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/people-outline.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-people-outline',
  shadow: false,
})
export class RuxIconPeopleOutline {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#people-outline`}></use>
      </svg>
    );
  }
}
