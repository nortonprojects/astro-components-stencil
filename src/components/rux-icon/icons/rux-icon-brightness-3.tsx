import { Component, Prop, h } from '@stencil/core';
    import svgIcon from '../../../icons/brightness-3.svg';

    /**
     * WARNING: This is an autogenerated component.
     * Do not make any changes to this file or they will be overwritten on build.
     * The template for this file is located in the generate-icons.js util file.
     * /

    /** @internal **/
    @Component({
      tag: 'rux-icon-brightness-3',
      shadow: false,
    })
    export class RuxIconBrightness3 {
      @Prop() color: string;
      @Prop() icon: string;
      @Prop() size: 'extra-small' | 'small' | 'normal' | 'large';

      render() {
        return <div class={`rux-icon--${this.size}`}  innerHTML={svgIcon}></div>;
      }
    }
  