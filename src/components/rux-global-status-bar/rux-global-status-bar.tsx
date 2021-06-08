import { Prop, Component, Host, h } from '@stencil/core';
import { AppMeta } from '../../common/functional-components/appMeta';

@Component({
  tag: 'rux-global-status-bar',
  styleUrl: 'rux-global-status-bar.scss',
  shadow: true,
})
export class RuxGlobalStatusBar {
  /**
   * Declares whether a rux-icon will be shown in the global status bar
   */
  @Prop() includeIcon?: boolean = false
  /**
   * Declares whether the app-meta information will be shown in the global status bar
   */
  @Prop() includeAppMeta?: boolean = false
  /**
   * Sets the domain of the application to be displayed in the default app-meta element
   */
  @Prop() appDomain?: string;
  /**
   * Sets the name of the application to be displayed in the default app-meta element
   */
  @Prop() appName?: string;
  /**
   * Sets the version of the application to be displayed in the default app-meta element
   */
  @Prop() appVersion?: string;
  /**
   * Sets the icon to be displayed in the default rux-icon component
   */
  @Prop({ mutable: true, reflect: true }) menuIcon?: string = "apps";

  render() {
    return (
      <Host>
        <header>

          <slot name="left-side">
            {this.includeIcon && <rux-icon icon={`${this.menuIcon}`} size="small" style={{ "width": "32px" }} />}
          </slot>
          
          <slot name="app-meta">
            {this.includeAppMeta &&
              <AppMeta domain={this.appDomain?.toUpperCase()} name={this.appName?.toUpperCase()} version={this.appVersion}>
                {/* these divs are placeholders until an app state component and username display component are built */}
                <div class="temp-app-state">App state</div>
                <div class="temp-user-name">Username</div>
              </AppMeta>
            }
          </slot>

          <div class="slotted-content">
            <slot></slot>
          </div>

          <slot name="right-side"></slot>
          
        </header>
      </Host>
    );
  }

}
