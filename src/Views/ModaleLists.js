import '../Styles/ModaleLists.scss';

/* eslint-disable @typescript-eslint/naming-convention */
const list = (data) => {
  const {
    title = 'Titre inconnu',
    id = 'No ID'
  } = data;
  return (`
    <div class='modale-list'>
      <div class='preview'>
        ${title[0]}
      </div>
      <div class="title">
        <h1>${title}</h1>
        <div class="buttons">
          <a class="add-${id}"><button class="positive">Ajouter</button></a>
        </div>
      </div>
    </div>
  `);
};

export default (datas) => {
  const html = `
    ${datas.map((data) => list(data)).join('')}
  `;
  return html;
};
