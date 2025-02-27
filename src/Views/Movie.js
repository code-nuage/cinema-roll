import '../Styles/Movie.scss';
import dateFormatter from '../Scripts/dateFormatter';

// Feeling way to dumb because TMDB could already return the string of the genre
// function getGenre(id) {
//   switch (id) {
//     case (10759):
//       return 'Action & Aventure';
//     case (16):
//       return 'Animation';
//     case (35):
//       return 'Comédie';
//     case (80):
//       return 'Crime';
//     case (99):
//       return 'Documentaire';
//     case (18):
//       return 'Drame';
//     case (10751):
//       return 'Famille';
//     case (10762):
//       return 'Enfant';
//     case (9648):
//       return 'Mystère';
//     case (10763):
//       return 'Actualité';
//     case (10764):
//       return 'Télé-Realité';
//     case (10765):
//       return 'Science Fiction & Fantasy';
//     case (10766):
//       return 'Feuilleton';
//     case (10767):
//       return 'Talk-Show';
//     case (10768):
//       return 'Guerre & Politique';
//     case (37):
//       return 'Western';
//     default:
//       return 'Inconnu';
//   }
// }

/* eslint-disable @typescript-eslint/naming-convention */
const movie = (data) => {
  // console.log(data);
  const {
    title,
    release_date,
    backdrop_path,
    genres,
    overview,
    vote_average
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
      <h3><span>Date de sortie:</span>${dateFormatter(release_date)}<h3>
      <h3><span>Genre:</span>${genres.map((id) => id.name).join(', ')}</h3>
      <h3><span>Note:</span>${vote_average}/10</p>
      <p><span>Résumé:</span>${overview}</p>
    </div>
`);
};

export default (data) => `
    ${movie(data)}
`;
