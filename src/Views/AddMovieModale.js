import '../Styles/AddMovieModale.scss';

import ViewModaleLists from './ModaleLists';

const modale = () => (`
  <section class="modale">
    <div class='modale-container'>
      <div class="modale-header">
        <h1></h1>
        <a class="exit-button">×</a>
      </div>
      <div class="modale-card">
        <div class='backdrop-path'>
          <img src="https://raw.githubusercontent.com/code-nuage/cinema-roll/refs/heads/main/src/assets/img/no-poster.png"/>
        </div>
        <div class='infos'>
          <h1>undefined</h1>
          <span class="id"></span>
        </div>
      </div>
      <div class='lists'>
        <h1>Listes</h1>
        <div class=grid>
        </div>
      </div>
    </div>
  </section>
`);

export default () => {
  const html = `
    ${modale()}
  `;

  setTimeout(() => {
    const lists = JSON.parse(localStorage.getItem('lists')) || [];
    document.querySelector('.modale .grid').innerHTML = `${ViewModaleLists(lists)}`;

    lists.forEach(({ id }) => {
      const add = document.querySelector(`.add-${id}`);
      if (add) {
        add.addEventListener('click', (event) => {
          event.preventDefault();
          const list = lists.find((listfilter) => listfilter.id === id);
          if (list) {
            document.querySelector('.modale').classList.remove('active');
            list.movies.push(document.querySelector('.modale-card .infos span').innerHTML);
            localStorage.setItem('lists', JSON.stringify(lists));
          }
        });
      }
    });

    const exit = document.querySelector('.exit-button');
    if (exit) {
      exit.addEventListener('click', (event) => {
        event.preventDefault();

        document.querySelector('.modale').classList.remove('active');
      });
    }
  });
  return html;
};
