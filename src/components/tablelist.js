class TableList extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
    this.labels = JSON.parse(this.getAttribute('labels'))
    this.data = []
  }

  connectedCallback() {
    this.loadData()
    this.render()
    this.setupCounter()
  }

  loadData() {
    this.data = [
      { price: 'Jarfa', product: 'ouch@gmail.com', createdAt: '10/20/2024', updatedAt: '10/20/2024' }
    ]
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>

      /* TABLE LIST */
      .tablelist-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 0.6rem;
        margin-bottom: 1rem;
      }

      .tablelist-header button {
        font-family: "Pixel LCD", ui-monospace, monospace;
        font-size: 0.9rem;
        letter-spacing: 1px;
        border: var(--border-thin) solid var(--yellow);
        background: var(--panel);
        color: var(--yellow);
        padding: 0.5rem 1rem;
        cursor: pointer;
      }

      .tablelist-header button:hover {
        color: black;
        background: var(--yellow);
      }

      .tablelist-info {
        list-style: none;
        padding: 1rem;
        border: var(--border-thin) solid var(--yellow);
        display: flex;
        flex-direction: column;
        gap: 0.4rem;
      }

      .tablelist-info:hover {
        cursor: pointer;
      }

      .tablelist-info-item {
        display: flex;
        gap: 0.4rem;
      }

      .tablelist-info-item + .tablelist-info-item {
        border-top: 1px solid var(--yellow);
        padding-top: 0.4rem;
      }

      .tablelist-info-item p strong {
        color: var(--yellow);
      }

      .tablelist-info-item p:last-child {
        color: var(--text);
      }

      /* TAB NAV */

      .tablelist-header-button{
        font-family: "Pixel LCD", ui-monospace, monospace;
        font-size: 0.9rem;
        letter-spacing: 1px;
        border: 3px solid var(--red);
        background: var(--yellow);
        color: black;
        padding: 0.5rem 1rem;
        cursor: pointer;
        box-shadow: 4px 4px 0 var(--red);
      }

      .filter-button {
        margin-left: auto;
      }

      .filter-button,
      .tablelist-header-button {
        width: 2.6rem;
        padding: 0.5rem;
        text-align: center;
      }

      .filter-button:active,
      .tablelist-header-button:active {
        box-shadow: none;
        transform: translate(4px, 4px);
      }

      .tablelist-header-button.is-active {
        filter: brightness(1.1);
      }

      .tab-nav {
        display: flex;
        justify-content: flex-start;
        gap: 1rem;
      }

      .plus-minus-button {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .plus-minus-button button {
        width: 2.6rem;
        padding: 0.5rem;
        text-align: center;
      }

      .plus-minus-button input {
        width: 2.6rem;
        padding: 0.5rem;
        text-align: center;
      }

    </style>

    <div class="tablelist-header" slot="tablelist-header">
      <div class="plus-minus-button">
        <button class="decrement">-</button>
        <input type="number" class="number-input" value="1">
        <button class="increment">+</button>
      </div>
      <slot name="filter-button"><button>Filter</button></slot>
    </div>

    <section class="table">
      <ul class="tablelist-info"></ul>
    </section>
    `

    const ul = this.shadow.querySelector(".tablelist-info")

    this.data.forEach(item => {

      Object.entries(item).forEach(([key, value]) => {

        if (this.labels[key]) {
          const li = document.createElement("li")
          li.classList.add("tablelist-info-item")

          const p1 = document.createElement("p")
          const strong = document.createElement("strong")
          strong.textContent = this.labels[key]
          p1.appendChild(strong)

          const p2 = document.createElement("p")
          p2.textContent = value

          li.appendChild(p1)
          li.appendChild(p2)
          ul.appendChild(li)
        }
      })
    })
  }

  setupCounter() {
    const increment = this.shadow.querySelector('.increment')
    const decrement = this.shadow.querySelector('.decrement')
    const countInput = this.shadow.querySelector('.number-input')

    if (!increment || !decrement || !countInput) return

    const min = countInput.min !== '' ? parseInt(countInput.min, 10) : 0
    const max = countInput.max !== '' ? parseInt(countInput.max, 10) : Infinity

    increment.addEventListener('click', () => {
      const value = parseInt(countInput.value, 10) || 0
      if (value < max) countInput.value = value + 1
    })

    decrement.addEventListener('click', () => {
      const value = parseInt(countInput.value, 10) || 0
      if (value > min) countInput.value = value - 1
    })
  }
}

customElements.define('tablelist-component', TableList);