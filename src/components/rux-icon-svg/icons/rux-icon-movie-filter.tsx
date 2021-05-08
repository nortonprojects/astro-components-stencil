import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/movie-filter.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-movie-filter',
  shadow: false,
})
export class RuxIconMovieFilter {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#movie-filter`}></use>
      </svg>
    );
  }
}
