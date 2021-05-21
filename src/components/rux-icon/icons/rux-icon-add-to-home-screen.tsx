import { Component, Prop, h } from '@stencil/core';
    import svgIcon from '../../../icons/add-to-home-screen.svg';

    /**
     * WARNING: This is an autogenerated component.
     * Do not make any changes to this file or they will be overwritten on build.
     * The template for this file is located in the generate-icons.js util file.
     * /

    /** @internal **/
    @Component({
      tag: 'rux-icon-add-to-home-screen',
      shadow: false,
    })
    export class RuxIconAddToHomeScreen {
      @Prop() color: string;
      @Prop() icon: string;
      @Prop() size: 'extra-small' | 'small' | 'normal' | 'large';

      render() {
        return <div class={`rux-icon--${this.size}`}  innerHTML={svgIcon}></div>;
      }
    }
  