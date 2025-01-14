import ViewHeader from '../Views/Header';
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
      ${ViewFooter}
    `;
  }

  run() {
    this.render();
  }
};

export default MainPage;
