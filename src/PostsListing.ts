import { LitElement, html, css } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';

@customElement('post-listing')
export class PostListing extends LitElement {
  @state()
  private posts: Array<any> = [];

  connectedCallback() {
    // Don't forget to call super!  Wasted an hour of my time.
    super.connectedCallback();
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => this.posts = json);
  }

  render() {
    return html`
        <h1>Posts</h1>
        ${this.posts.map(p => html`<post-detail title="${p.title}"></post-detail>`)}
    `;
  }
}
