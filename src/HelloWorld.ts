import { LitElement, html, css } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('hello-world')
export class HelloWorld extends LitElement {
  @property({ type: String }) title = 'My app';

  render() {
    return html`
      <h1>${this.title}</h1>
    `;
  }
}
