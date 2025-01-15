import Router from './router';
import ControllerMainPage from './Controllers/MainPage';
import ControllerMovie from './Controllers/Movie';
import ControllerMoviesList from './Controllers/MoviesList';

import './assets/styles/main.scss';

const routes = [{
  url: '/',
  controller: ControllerMainPage
},
{
  url: '/movies',
  controller: ControllerMoviesList
},
{
  url: '/movie',
  controller: ControllerMovie
}];

new Router(routes);
