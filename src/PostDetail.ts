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

  @property()
  public userId: number = 0;

  @state()
  private isOpen: boolean = false;

  connectedCallback() {
    // Don't forget to call super!  Wasted an hour of my time.
    super.connectedCallback();

    console.log(`title: ${this.title}`)
    console.log(`postId: ${this.postId}`)
    console.log(`postBody: ${this.postBody}`)
  }

  render() {
    return html`
      <li>
      <div @click="${this.postClicked}">
        <strong>Post Title:</strong> ${this.title}
        <author-detail authorId="${this.userId}" isOpen="${this.isOpen}"></author-detail>
      </div>
      </li>
    `;
  }

  postClicked() {
    console.log('clicked!');
    this.isOpen = !this.isOpen;
  }
}
