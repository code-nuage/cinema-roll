import ViewHeader from '../Views/Header';
import ViewError404 from '../Views/Error404';
import ViewFooter from '../Views/Footer';

const Error404 = class Error404 {
  constructor() {
    this.app = document.querySelector('#app');

    this.run();
  }

  render() {
    return `
      ${ViewHeader}
      ${ViewError404}
      ${ViewFooter}
    `;
  }

  run() {
    this.app.innerHTML = this.render();
  }
};

export default Error404;
