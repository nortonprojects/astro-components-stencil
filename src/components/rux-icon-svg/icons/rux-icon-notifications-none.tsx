import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/notifications-none.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-notifications-none',
  shadow: false,
})
export class RuxIconNotificationsNone {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#notifications-none`}></use>
      </svg>
    );
  }
}
