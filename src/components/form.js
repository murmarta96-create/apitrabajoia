class Form extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  connectedCallback() {
    this.render()
  }

  render() {
    this.shadow.innerHTML =
    /*html*/`
    <style>

    /* FORM CONTENT */

    *{
      box-sizing: border-box;
      
    }

    .form-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between; 
      border-bottom: var(--border-thin) solid var(--yellow);
      gap: 0.7rem; 
      padding-bottom: 25px;
      padding-left: 10px;
    
    }

    .form-header .item-1 {
      flex: 1; 
    }

    .form-header .item-2 {
      flex: 2; 
    }   
    
    .tab-content-wrapper {
      scroll-behavior: smooth;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem 3rem;
    }

    :host(.is-browsing) .tab-content-wrapper {
      max-height: 60vh;
      overflow-y: auto;
      overflow-x: hidden;
      
    }


    .tab-button{
      background-color: transparent;
      color: var(--yellow);
      border: none;
      cursor: pointer;
      font-family: "Retro Computer", monospace;
      font-size: 1rem;
    }
    .tab-button:hover,
    .tab-button.active{
      background-color: var(--yellow);
      color: black;
    }
    .form-buttons svg{
      fill: var(--yellow);
      width: 1.5rem;
      height: 1.5rem;
    }

    .refresh-button{
      background-color: transparent;
      border: none;
      cursor: pointer;
    }

    .save-button{
      background-color: transparent;
      border: none;
    }

    /* El scroll solo aplica cuando se están explorando todas las tabs
       (modo is-browsing). Con una sola tab activa, no hay límite de
       altura ni scroll. */
    :host(.is-browsing) .tab-content-wrapper {
      max-height: 60vh;
      overflow-y: auto;
    }

    /* Cada grupo empieza oculto */
    .tab-group {
     display: none;
     padding-top: 1rem;
     cursor: default;
    }
      

    /* Cuando se le añade esta clase, se muestra */
    .tab-group.active {
      display: contents;
    }

    .field {
      display: flex;
      flex-direction: column;
      gap: 0.3rem;
      
    }

    .tab-group label {
      display: block;
      font-family: "Pixel LCD", ui-monospace, monospace;
      color: var(--yellow);
    }

    .tab-group input {
      width: 100%;
      font-family: "Retro Computer", monospace;
      font-size: 1rem;
      background: black;
      border: var(--border-thin) solid var(--yellow);
      padding: 0.6rem 0.8rem;
      color: var(--text);
      outline: none;
    }

    .tab-group input::placeholder {
      color: var(--yellow);
    }

    .tab-group input:focus {
      border-color: var(--red);
    }

    .field:last-child {
      grid-column: 1 / -1;
    }

    </style>

    <section class="form">
      <div class="form-header">
        <div class="form-tabs">
          <button class="tab-button active" data-tab="general" type="button">General</button>
          <button class="tab-button" data-tab="images" type="button">Images</button>
        </div>

        <div class="form-buttons">
          <button class="refresh-button" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>refresh</title><path d="M17.65,6.35C16.2,4.9 14.21,4 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20C15.73,20 18.84,17.45 19.73,14H17.65C16.83,16.33 14.61,18 12,18A6,6 0 0,1 6,12A6,6 0 0,1 12,6C13.66,6 15.14,6.69 16.22,7.78L13,11H20V4L17.65,6.35Z" /></svg>
          </button>
          <button class="save-button" type="button">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>content-save</title><path d="M15,9H5V5H15M12,19A3,3 0 0,1 9,16A3,3 0 0,1 12,13A3,3 0 0,1 15,16A3,3 0 0,1 12,19M17,3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V7L17,3Z" /></svg>
          </button>
        </div>
      </div>

      <div class="tab-content-wrapper">
        <div class="tab-group active" data-tab="general">
          <div class="field">
            <label for="name">Name</label>
            <input type="text" id="name" name="name">
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input type="email" id="email" name="email">
          </div>
          <div class="field">
            <label for="name-1">Name</label>
            <input type="text" id="name-1" name="name-1">
          </div>
          <div class="field">
            <label for="email-1">Email</label>
            <input type="email" id="email-1" name="email-1">
          </div>
          <div class="field">
            <label for="name-2">Name</label>
            <input type="text" id="name-2" name="name-2">
          </div>
        </div>

        <div class="tab-group" data-tab="images">
          <div class="field">
            <label for="name-3">Name</label>
            <input type="text" id="name-3" name="name-3">
          </div>
          <div class="field">
            <label for="email-4">Email</label>
            <input type="email" id="email-4" name="email-4">
          </div>
        </div>
      </div>
    </section>
    
    `

    this.shadow.querySelector('.form').addEventListener('click', (event) => {

      if (event.target.closest('.tab-button')) {
        const tab = event.target.closest('.tab-button')

        this.shadow.querySelectorAll('.tab-button.active').forEach(tab => {
          tab.classList.remove('active')
        })
        event.target.closest('.tab-button').classList.add('active')

        this.shadow.querySelectorAll('.tab-group.active').forEach(group => {
          group.classList.remove('active')
        })
        this.shadow.querySelectorAll(`.tab-group[data-tab="${tab.dataset.tab}"]`).forEach(group => {
          group.classList.add('active')
        })
      }

      if (event.target.closest('.refresh-button')) {
        alert("limpiar")
      }

      if (event.target.closest('.save-button')) {
        alert("guardar")
      }
    })
  }
}

customElements.define('form-component', Form);