class Logo extends HTMLElement {

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
        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .logo img {
          display: block;
          height: 40px;
          width: auto;
        }

        .logo h1 {
          margin: 0;
          color: yellow;
          font-family: monospace;
          font-size: 2rem;
          letter-spacing: 6px;
          text-shadow:
            0 0 6px rgba(227, 245, 114, 0.86),
            3px 3px 0 red;
        }
      </style>

      <div class="logo">
        <img
          src="https://www.nicepng.com/png/full/179-1790559_rasmusred-rasmus-hotline-miami.png"
          alt="Logo"
        >
        <h1>FIGHTER</h1>
      </div>

    `;
  }
}


customElements.define('logo-component', Logo);