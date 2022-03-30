import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('main-app')
export class MainApp extends LitElement {
  static styles = css`
    main {
      padding: 3rem;
    }
  `;

  render() {
    return html`
      <main>
        <post-listing></post-listing>
      </main>
    `;
  }
}
