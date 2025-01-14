import '../Styles/MovieList.scss';

/* eslint-disable @typescript-eslint/naming-convention */
const movie = (data) => {
  const {
    title,
    release_date,
    poster_path
  } = data;
  /* eslint-enable @typescript-eslint/naming-convention */
  return (`
  <div class="card">
    <div class="top">
      <div class="infos">
        <div class="backdrop-path">
          <img src="https://image.tmdb.org/t/p/w300/${poster_path}" />
        </div>
        <div class="title">
          <h5>Titre: </h5>
          <h4>${title}</h4>
        </div>
        <div class="release-date">
          <h5>Date de sortie: </h5>
          <h4>${release_date}</h4>
        </div>
      </div>
    </div>
    <a href="movie"><button class="primary">Plus d'infos</button></a>
  </div>
`);
};

export default (datas) => `
    ${datas.map((data) => (movie(data))).join('')}
`;
