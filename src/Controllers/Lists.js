import ScriptNowDate from '../Scripts/nowDate';

import ViewHeader from '../Views/Header';
import ViewLists from '../Views/Lists';
import ViewFooter from '../Views/Footer';

const Lists = class Lists {
  constructor() {
    this.app = document.querySelector('#app');
    this.run();
  }

  renderInit() {
    this.app.innerHTML = `
      ${ViewHeader}
      <section class="lists"></section>
      ${ViewFooter}
    `;
    this.renderLists();

    document.querySelector('.add').addEventListener('click', () => {
      console.log('Liste');
      const lists = JSON.parse(localStorage.getItem('lists')) || [];

      lists.push({
        title: 'Liste',
        creation: ScriptNowDate,
        id: lists.length > 0 ? lists[lists.length - 1].id + 1 : 1,
        movies: []
      });
      localStorage.setItem('lists', JSON.stringify(lists));
      this.renderGrid();
    });
  }

  renderLists() {
    document.querySelector('.lists').innerHTML = `
    <h1>Tes listes</h1>
    <button class="add primary">Creer une liste</button>
    <div class="grid">
      ${ViewLists(JSON.parse(localStorage.getItem('lists')) || [])}
    </div>`;
    this.renderGrid();
  }

  renderGrid() {
    let datas = JSON.parse(localStorage.getItem('lists')) || [];
    document.querySelector('.grid').innerHTML = `
      ${ViewLists(datas || [])}
    `;

    datas.forEach(({ id }) => {
      const modify = document.querySelector(`.modify-${id}`);
      if (modify) {
        modify.addEventListener('click', (event) => {
          event.preventDefault();

          const item = modify.closest('.item');
          const titleElement = item.querySelector('h1');
          const currentTitle = titleElement.textContent;
          titleElement.innerHTML = `<input type="text" value="${currentTitle}" class="edit-title" />`;

          const input = item.querySelector('.edit-title');
          input.focus();
          input.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
              const newTitle = input.value.trim();

              if (newTitle) {
                datas = datas.map((data) => {
                  const card = data;
                  if (card.id === id) {
                    card.title = newTitle;
                  }
                  return card;
                });
                localStorage.setItem('lists', JSON.stringify(datas));

                this.renderGrid();
              }
            }
          });

          input.addEventListener('blur', () => {
            this.renderGrid();
          });
        });
      }
      const remove = document.querySelector(`.remove-${id}`);
      if (remove) {
        remove.addEventListener('click', (event) => {
          event.preventDefault();

          datas = datas.filter((data) => data.id !== id);
          localStorage.setItem('lists', JSON.stringify(datas));
          this.renderGrid();
        });
      }
    });
  }

  run() {
    this.renderInit();
  }
};

export default Lists;
