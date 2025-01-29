import '../Styles/SingleMovieList.scss';

/* eslint-disable @typescript-eslint/naming-convention */
const movie = (data) => {
  // console.log(data);
  const {
    title,
    backdrop_path
  } = data;
  let preview_path;
  if (backdrop_path === null) {
    preview_path = 'https://raw.githubusercontent.com/code-nuage/cinema-roll/refs/heads/main/src/assets/img/no-preview.png';
  } else {
    preview_path = `https://image.tmdb.org/t/p/w1280/${backdrop_path}`;
  }
  /* eslint-enable @typescript-eslint/naming-convention */
  return (`
    <div class='backdrop-path'>
      <img src="${preview_path}"/>
    </div>
    <div class='infos'>
      <h1>${title}</h1>
    </div>
`);
};

export default (data) => `
    <div class="movie-card">
      ${movie(data)}
    </div>
`;
