import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/all-inbox.svg';

/**
 * WARNING: This is an autogenerated component.
 * Do not make any changes to this file or they will be overwritten on build.
 * The template for this file is located in the generate-icons.js util file.
 * /

/** @internal **/
@Component({
  tag: 'rux-icon-all-inbox',
  shadow: false,
})
export class RuxIconAllInbox {
  @Prop() color: 'primary' | 'secondary' | 'tertiary' | 'quaternary' | 'white';

  @Prop() name: string;

  @Prop() size: 'extra small' | 'small' | 'base' | 'large';

  render() {
    return <div class={`rux-icon--${this.color} rux-icon--${this.size}`}  innerHTML={svgIcon}></div>;
  }
}
