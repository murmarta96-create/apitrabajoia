class Header extends HTMLElement {

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

        header {
          width: 100%;
          min-height: 70px;
          box-sizing: border-box;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.8rem 1rem;
          background: #111;
          border-bottom: 2px solid yellow;
        }
      </style>

      <header>
        <slot></slot>
      </header>
    `;
  }
}


customElements.define('header-component', Header);

