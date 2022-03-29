import { LitElement, html, css } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';

@customElement('post-detail')
export class PostDetail extends LitElement {
  @property()
  public title: string = '';

  connectedCallback() {
    // Don't forget to call super!  Wasted an hour of my time.
    super.connectedCallback();
  }

  render() {
    return html`
      <div>
        <strong>Title:</strong> ${this.title}
      </div>
    `;
  }
}
