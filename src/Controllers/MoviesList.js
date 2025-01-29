import axios from 'axios';

import ViewHeader from '../Views/Header';
import ViewAddMovieModale from '../Views/AddMovieModale';
import ViewMovieList from '../Views/MovieList';
import ViewFooter from '../Views/Footer';

import API from '../keys';

const MoviesList = class MoviesList {
  constructor() {
    this.app = document.querySelector('#app');
    this.movies = [];
    this.run();
  }

  renderInit() {
    this.app.innerHTML = `
    ${ViewHeader}
    ${ViewAddMovieModale()}
    <section class="movies"></section>
    ${ViewFooter}
    `;

    document.querySelector('.searchbar').addEventListener('input', (e) => {
      const searchValue = e.target.value.trim();
      if (searchValue.length > 4) {
        this.search(searchValue);
      } else {
        this.getPopulars();
      }
    });
  }

  renderPopulars() {
    return `
    <h1>Films populaires</h1>
    <div class="grid">
      ${ViewMovieList(this.movies)}
    </div>
    `;
  }

  renderSearch() {
    return `
    <h1>Recherche</h1>
    <div class="grid">
      ${ViewMovieList(this.movies)}
    </div>
    `;
  }

  run() {
    this.renderInit();
    this.getPopulars();
  }

  getPopulars() {
    axios.get('https://api.themoviedb.org/3/movie/popular', {
      params: {
        api_key: API.TMDB,
        language: 'fr-FR',
        page: 1
      }
    })
      .then((res) => {
        this.movies = res.data.results;
        document.querySelector('.movies').innerHTML = this.renderPopulars();
      });
  }

  search(search) {
    axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: API.TMDB,
        language: 'fr-FR',
        page: 1,
        query: search
      }
    })
      .then((res) => {
        this.movies = res.data.results;
        document.querySelector('.movies').innerHTML = this.renderSearch();
      });
  }
};

export default MoviesList;
