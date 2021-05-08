import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/show-chart.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-show-chart',
  shadow: false,
})
export class RuxIconShowChart {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#show-chart`}></use>
      </svg>
    );
  }
}
