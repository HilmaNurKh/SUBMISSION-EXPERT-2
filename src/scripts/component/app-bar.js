class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="menumobile">
    <div class="icon-mobile" id="menu"><a href="#">&#9776;</a></div>
    <div class="logo-mobile">EATME ADN HAPPY!</div>
  </div>
  <nav id="drawer" class="navmobile">
    <ul class="nav-Listmob">
      <li class="nav-Itemsmob"><a href="/#">Home</a></li>
      <li class="nav-Itemsmob"><a href="/#/favorite">Favorite</a></li>
      <li class="nav-Itemsmob">
        <a
          target="_blank"
          href="https://www.instagram.com/hilmaaaa.nkh/"
          >About Us</a
        >
      </li>
    </ul>
  </nav>

  <nav class="navbar">
  <a class="logo" href="">EATME AND HAPPY!</a>
  <ul class="navList">
    <li class="navItems"><a href="/#">Home</a></li>
    <li class="navItems"><a href="#/favorite">Favorite</a></li>
    <li class="navItems">
      <a
        target="_blank"
        href="https://www.instagram.com/hilmaaaa.nkh/"
        >About Us</a
      >
    </li>
  </ul>
</nav>`;
  }
}
customElements.define('app-bar', AppBar);
