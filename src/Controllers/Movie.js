import axios from 'axios';

import ViewHeader from '../Views/Header';
import ViewMovie from '../Views/Movie';
import ViewFooter from '../Views/Footer';

import API from '../keys';

const Movie = class Movie {
  constructor(params) {
    this.app = document.querySelector('#app');
    this.id = params.id;
    this.movie = {};
    this.run();
  }

  render() {
    return `
    ${ViewHeader}
    <section class="movie">
      ${ViewMovie(this.movie)}
    </section>
    ${ViewFooter}
    `;
  }

  run() {
    axios.get(`https://api.themoviedb.org/3/movie/${this.id}`, {
      params: {
        api_key: API.TMDB,
        language: 'fr-FR'
      }
    })
      .then((res) => {
        this.movie = res.data;
        this.app.innerHTML = this.render();
      });
  }
};

export default Movie;
