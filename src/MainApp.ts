import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('main-app')
export class MainApp extends LitElement {
  render() {
    return html`
      <main>
        <post-listing></post-listing>
      </main>
    `;
  }
}
