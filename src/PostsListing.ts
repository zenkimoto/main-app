import { LitElement, html, css } from 'lit';
import { state, customElement } from 'lit/decorators.js';

@customElement('post-listing')
export class PostListing extends LitElement {
  static styles = css`
    h1 {
      color: #000099;
    }
  `;

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
        <p>Click on a post to see author.</p>
        <ul>
        ${this.posts.map(p => html`<post-detail postId="${p.id}" title="${p.title}" postBody="${p.body}" userId="${p.userId}">
        </post-detail>`)}
        </ul>
    `;
  }
}
