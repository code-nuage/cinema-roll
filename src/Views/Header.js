import '../Styles/Header.scss';

export default `
<header>
  <nav class="navbar">
    <div class="left">
      <a href="./" class="cinema-roll-icon"><img src="https://raw.githubusercontent.com/code-nuage/cinema-roll/refs/heads/main/src/assets/img/cinema-roll-icon.png"/><h3>Cinema Roll</h3></a>
      <a href="./movies" class="tab">Explorer</a>
      <a href="./lists" class="tab">Listes</a>
    </div>
    <div class="right">
      <input type="text" class="searchbar"/>
      <a href="https://www.github.com/code-nuage/cinema-roll"><button class="primary">GitHub</button></a>
    </div>
  </nav>
</header>
`;
