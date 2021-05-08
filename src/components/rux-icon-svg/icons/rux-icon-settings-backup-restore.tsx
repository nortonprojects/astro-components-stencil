import { Component, Prop, h } from '@stencil/core';
import svgIcon from '../../../icons/settings-backup-restore.svg';

/** @internal **/
@Component({
  tag: 'rux-icon-settings-backup-restore',
  shadow: false,
})
export class RuxIconSettingsBackupRestore {
  @Prop() size: string;
  @Prop() viewBox: string;

  render() {
    return (
      <svg part="svg" class={`rux-icon--${this.size}`}  viewBox={this.viewBox}>
        <use xlinkHref={`${svgIcon}#settings-backup-restore`}></use>
      </svg>
    );
  }
}
