import { LitElement, html, css } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';

@customElement('post-detail')
export class PostDetail extends LitElement {
  @property()
  public title: string = '';

  @property({ type: Number })
  public postId: number = 0;

  @property()
  public postBody: string = '';                                                                                          

  connectedCallback() {
    // Don't forget to call super!  Wasted an hour of my time.
    super.connectedCallback();

    console.log(`title: ${this.title}`)
    console.log(`postId: ${this.postId}`)
    console.log(`postBody: ${this.postBody}`)
  }

  render() {
    return html`
      <div>
        <strong>Title:</strong> ${this.title}
      </div>
    `;
  }
}
