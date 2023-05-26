class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <p>&copy;Copyright 2023 - EATME AND HAPPY - Hilma Nur Kholilah</p>`;
  }
}

customElements.define('app-footer', AppFooter);
