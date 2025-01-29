import Router from './router';
import ControllerMainPage from './Controllers/MainPage';
import ControllerLists from './Controllers/Lists';
import ControllerList from './Controllers/List';
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
},
{
  url: '/lists',
  controller: ControllerLists
},
{
  url: '/list',
  controller: ControllerList
}];

new Router(routes);
