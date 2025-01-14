import axios from 'axios';

import ViewHeader from '../Views/Header';
import ViewMovieList from '../Views/MovieList';
import ViewFooter from '../Views/Footer';

import API from '../keys';

const MoviesList = class MoviesList {
  constructor() {
    this.app = document.querySelector('#app');
    this.movies = [];
    this.run();
  }

  render() {
    return `
    ${ViewHeader}
    <section class="movies">
      ${ViewMovieList(this.movies)}
    </section>
    ${ViewFooter}
    `;
  }

  run() {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: API.TMDB,
        language: 'fr-FR'
      }
    })
      .then((res) => {
        this.movies = res.data.results;
        this.app.innerHTML = this.render();
      });
  }
};

export default MoviesList;
