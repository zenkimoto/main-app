import { LitElement, html, css } from 'lit';
import { property } from 'lit/decorators.js';

export class HelloWorld extends LitElement {
  @property({ type: String }) title = 'My app';

  render() {
    return html`
      <h1>${this.title}</h1>
    `;
  }
}
