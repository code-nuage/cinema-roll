import Router from './router';
import ControllerMainPage from './Controllers/MainPage';
import ControllerMoviesList from './Controllers/MoviesList';

import './assets/styles/main.scss';

const routes = [{
  url: '/',
  controller: ControllerMainPage
},
{
  url: '/movies',
  controller: ControllerMoviesList
}];

new Router(routes);
