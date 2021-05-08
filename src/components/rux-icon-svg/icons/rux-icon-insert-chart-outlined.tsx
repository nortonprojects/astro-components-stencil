import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/insert-chart-outlined.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-insert-chart-outlined',
  shadow: false,
})
export class RuxIconInsertChartOutlined {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#insert-chart-outlined`}></use>
      </svg>
    );
  }
}
