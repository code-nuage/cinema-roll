import axios from 'axios';
import API from '../keys';

import ViewHeader from '../Views/Header';
import ViewSingleListMovies from '../Views/SingleListMovies';
import ViewFooter from '../Views/Footer';

const List = class List {
  constructor() {
    this.app = document.querySelector('#app');
    this.run();
  }

  render() {
    this.app.innerHTML = `
      ${ViewHeader}
      <section class="list container">
        <div class="grid">
        </div>
      </section>
      ${ViewFooter}
    `;
  }

  run() {
    this.render();

    const lists = JSON.parse(localStorage.getItem('lists')) || [];

    lists.forEach((list) => {
      list.movies.forEach((id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: {
            api_key: API.TMDB,
            language: 'fr-FR'
          }
        })
          .then((res) => {
            document.querySelector('.grid').innerHTML += ViewSingleListMovies(res.data);
          });
      });
    });
  }
};

export default List;
