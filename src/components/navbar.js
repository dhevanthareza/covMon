class Navbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <nav
        class="navbar navbar-expand-lg navbar-light bg-light navbar-fixed bg-primary"
      >
        <a class="navbar-brand text-primary font-weight-bold" href="#"
          >CovMon</a
        >
      </nav>
    `;
  }
}
customElements.define("d-navbar", Navbar);
