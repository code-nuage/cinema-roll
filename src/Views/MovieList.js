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
      <a href=""><button class="secondary">Enregistrer</button></a>
    </div>
  </div>
`);
};

export default (datas) => `
    ${datas.map((data) => (movie(data))).join('')}
`;
