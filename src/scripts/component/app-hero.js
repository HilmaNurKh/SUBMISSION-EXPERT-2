class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="hero">
        <img src="./images/heros/hero-image_2.jpg" alt="gambar makanan" />
        <div class="hero-inner">
          <h1 class="hero-title">EATME AND HAPPY</h1>
          <p class="hero-subtitle">
            Jelajahi Restoran Terbaik Pilihan Kami
          </p>
        </div>
      </div>`;
  }
}

customElements.define('app-hero', AppHero);
