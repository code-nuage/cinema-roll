import Router from './router';
import ControllerMainPage from './Controllers/MainPage';

import './assets/styles/simpliestui.scss';

const routes = [{
  url: '/',
  controller: ControllerMainPage
}];

new Router(routes);
