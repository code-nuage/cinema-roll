import '../Styles/Lists.scss';

/* eslint-disable @typescript-eslint/naming-convention */
const list = (data) => {
  const {
    title = 'Titre inconnu',
    creation = 'Date de création inconnue',
    id = 'No ID'
  } = data;
  return (`
    <div class='item'>
      <div class='preview'>
        ${title[0]}
      </div>
      <div class="title">
        <h1>${title}</h1>
        <div class="creation">
          <span>Création:</span>
          <h3>${creation}</h3>
        </div>
      </div>
      <div class="buttons">
        <a href="./list?id=${id}"><button class="primary">Voir</button></a>
        <button class="secondary modify-${id}">Modifier</button>
        <button class="negative remove-${id}">Supprimer</button>
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
