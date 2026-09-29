class Login extends HTMLElement {

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.setupForm();
  }

  render() {
    const username = this.getAttribute('username') || 'User';

    this.shadow.innerHTML = 
    /*html*/`
      <style>

        /*LOGIN */

        .login-container{
        display: flex;
        flex-direction: column;
        gap: 2rem;
        width: 100%;
        height: 100vh;
        align-items: center;
        justify-content: center;
        font-family: "Retro Computer", ui-monospace, monospace;
        font-size: 1.4rem;
        }

        /*LOGIN HEADER */

        .login-title{
        font-family: "Pixel LCD", monospace;
        color: var(--yellow);
        text-align: center;
        font-size: 2.5rem;
        }

        .login-greeting{
        font-family: "Pixel LCD", monospace;
        color: var(--yellow);
        text-align: center;
        font-size: 1rem;
        }

        /*LOGIN BODY */

        .login-body{
        display: flex;
        flex-direction: column;
        gap: 1rem;
        width: 90%;
        max-width: 500px;
        }

        .login-body label{
        font-family: "Pixel LCD", monospace;
        color: var(--yellow);
        font-size: 1.2rem;
        }

        .login-body input{
        width: 100%;
        font-size: 1.2rem;
        padding: 0.8rem 1rem;
        box-sizing: border-box;
        }

        /*LOGIN FOOTER */

        .login-footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 90%;
        max-width: 500px;
        }

        .login-button{
        border: none;
        border-radius: 0.5rem;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.9rem 1rem;
        font-family: "Retro Computer", monospace;
        font-size: 1rem;
        width: 50%;
        box-sizing: border-box;
        margin: 2rem;
        cursor: pointer;
        background-color:yellow;
        color:black;
        }

        .forgot-button{
        font-family: "Retro Computer", monospace;
        text-align: center;
        background-color: transparent;
        border: transparent;
        color: var(--yellow);
        font-size: 1.1rem;
        }

      </style>

      <div class="login-container">
    <form>
      <div class="login-header">
        <h1 class="login-title">FIGHTER</h1>
        <p class="login-greeting">Hello, ${username}</p>
      </div>

      <div class="login-body">
        <label for="user-email">EMAIL</label>
        <input type="email" name="user-email" placeholder="fusku@example.com" required>

        <label for="user-password">PASSWORD</label>
        <input type="password" name="user-password" placeholder="*******" required>
      </div>

      <div class="login-footer">
        <button type="submit" class="login-button">LOGIN</button>
        <button type="button" class="forgot-button">FORGOT PASSWORD?</button>
      </div>
    </form>
  </div>
    `;
  }

  setupForm() {
    const form = this.shadow.querySelector('form');

    if (!form) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();

      const data = {
        email: form.querySelector('input[name="user-email"]').value,
        password: form.querySelector('input[name="user-password"]').value,
      };

      console.log('Datos del formulario:', data);

      alert('Login sent');

      this.dispatchEvent(new CustomEvent('login-submit', {
        detail: { data },
        bubbles: true,
        composed: true,
      }));
    });
  }

}


customElements.define('login-component', Login);