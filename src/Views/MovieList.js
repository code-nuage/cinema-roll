import axios from 'axios';
import API from '../keys';

import '../Styles/MovieList.scss';
import dateFormatter from '../Scripts/dateFormatter';

/* eslint-disable @typescript-eslint/naming-convention */
const movie = (data) => {
  const {
    title,
    release_date,
    poster_path,
    id
  } = data;
  let preview_path;
  if (poster_path === null) {
    preview_path = 'https://raw.githubusercontent.com/code-nuage/cinema-roll/refs/heads/main/src/assets/img/no-poster.png';
  } else {
    preview_path = `https://image.tmdb.org/t/p/w780/${poster_path}`;
  }
  /* eslint-enable @typescript-eslint/naming-convention */
  return (`
  <div class="card">
    <div class="top">
      <div class="infos">
        <div class="backdrop-path">
          <img src="${preview_path}"/>
        </div>
        <div class="title">
          <h5>Titre: </h5>
          <h4>${title}</h4>
        </div>
        <div class="release-date">
          <h5>Date de sortie: </h5>
          <h4>${dateFormatter(release_date)}</h4>
        </div>
      </div>
    </div>
    <div class="buttons">
      <a href="movie?id=${id}"><button class="primary">Plus d'infos</button></a>
      <a class="save-${id}"><button class="secondary">Enregistrer</button></a>
    </div>
  </div>
`);
};

/* eslint-disable @typescript-eslint/naming-convention */
const updateModale = (data) => {
  const {
    title,
    id,
    poster_path
  } = data;

  let preview_path;
  if (poster_path === null) {
    preview_path = 'https://raw.githubusercontent.com/code-nuage/cinema-roll/refs/heads/main/src/assets/img/no-poster.png';
  } else {
    preview_path = `https://image.tmdb.org/t/p/w780/${poster_path}`;
  }

  document.querySelector('.modale-header h1').innerHTML = `Ajouter ${title} à une liste`;
  document.querySelector('.modale-card .backdrop-path').innerHTML = `<img src="${preview_path}"/>`;
  document.querySelector('.modale-card .infos h1').innerHTML = `${title}`;
  document.querySelector('.modale-card .infos span').innerHTML = `${id}`;
};
/* eslint-enable @typescript-eslint/naming-convention */

export default (datas) => {
  const html = `
    ${datas.map((data) => movie(data)).join('')}
  `;

  setTimeout(() => {
    datas.forEach(({ id }) => {
      const saveButton = document.querySelector(`.save-${id}`);
      if (saveButton) {
        saveButton.addEventListener('click', (event) => {
          event.preventDefault();

          axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
            params: {
              api_key: API.TMDB,
              language: 'fr-FR'
            }
          })
            .then((res) => {
              document.querySelector('.modale').classList.add('active');
              updateModale(res.data);
            });
        });
      }
    });
  }, 0);

  return html;
};
