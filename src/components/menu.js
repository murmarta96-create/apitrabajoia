class Menu extends HTMLElement {

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
        .menu button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 45px;
          height: 40px;
          padding: 0;
          background: transparent;
          color: yellow;
          border: 2px solid yellow;
          cursor: pointer;
          font-size: 1.4rem;
        }

        .menu button {
          color: yellow;
          background: transparent;
          border: 2px solid yellow;
          font-size: 100%;
          letter-spacing: 1px;
          cursor: pointer;
          box-shadow: 4px 4px 0 red;
        }

        .menu button:active {
          box-shadow: none;
          transform: translate(4px, 4px);
        }
      </style>

      <section class="menu">
        <button
          type="button"
        >
          ☰
        </button>
      </section>
    `;
  }
}


customElements.define('menu-component', Menu);