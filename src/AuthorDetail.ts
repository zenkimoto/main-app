import { LitElement, html } from 'lit';
import { property, state, customElement } from 'lit/decorators.js';

@customElement('author-detail')
export class AuthorDetail extends LitElement {

  @property({ type: Number }) 
  public authorId: number = 0;

  @property({ type: String })
  public isOpen: string = '';

  @state()
  private author: any;

  connectedCallback() {
    super.connectedCallback();

    if (this.authorId === 0) return;

    fetch(`https://jsonplaceholder.typicode.com/users/${this.authorId}`)
      .then(response => response.json())
      .then(json => this.author = json);
  }

  render() {
    console.log('author', this.author, 'open', this.isOpen);
    return this.author && this.isOpen === 'true' ? 
    html`
      <div>
        <strong>Name: </strong> ${this.author.name}
      </div>
    ` : ``;
  }
}
