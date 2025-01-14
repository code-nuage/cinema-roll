import '../Styles/Movie.scss';

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

function formatDate(date) {
  const [year, month, day] = date.split('-');
  return `${day}/${month}/${year}`;
}

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
  /* eslint-enable @typescript-eslint/naming-convention */
  return (`
    <div class='backdrop-path'>
      <img src='https://image.tmdb.org/t/p/w780/${backdrop_path}' />
    </div>
    <div class='infos'>
      <h1>${title}</h1>
      <h3>Date de sortie: ${formatDate(release_date)}<h3>
      <h3>Genre: ${genres.map((id) => id.name).join(', ')}</h3>
      <h3>Note: ${vote_average}/10</p>
      <p>Résumé: ${overview}</p>
    </div>
`);
};

export default (data) => `
    ${movie(data)}
`;
