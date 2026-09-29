class Main extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadow.innerHTML = /*html*/`
      <style>
        main {
          display: grid;
          grid-template-columns: 20rem 1fr;
          gap: 1.5rem;
          align-items: start;
          padding: 1.5rem;
          
        }

        @media (max-width: 38rem) {
          main {
            grid-template-columns: 1fr;
          }
        }
      </style>

      <main>
        <slot></slot>
      </main>
    `;
  }
}


customElements.define('main-component', Main);

