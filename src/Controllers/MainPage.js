import ViewHeader from '../Views/Header';
import ViewMainPage from '../Views/MainPage';
import ViewFooter from '../Views/Footer';

import '../Styles/MainPage.scss';

const MainPage = class MainPage {
  constructor() {
    this.element_app = document.querySelector('#app');
    this.run();
  }

  render() {
    this.element_app.innerHTML = `
      ${ViewHeader}
      ${ViewMainPage}
      ${ViewFooter}
    `;
  }

  run() {
    this.render();
  }
};

export default MainPage;
