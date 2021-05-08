import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/perm-phone-msg.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-perm-phone-msg',
  shadow: false,
})
export class RuxIconPermPhoneMsg {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#perm-phone-msg`}></use>
      </svg>
    );
  }
}
