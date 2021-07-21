'use strict';

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

for (let i = 0; i < 2; i++) {

  const lastWatchFilm = prompt('Один из последних просмотренных фильмов?', ''),
        appraisal = prompt('На сколько оцените его?', '');

  if (lastWatchFilm != null && appraisal != null && lastWatchFilm != '' && appraisal != '' && lastWatchFilm.length < 50) {
    personalMovieDB.movies[lastWatchFilm] = appraisal;
    console.log('Done!');
  } else {
    console.log('Error!');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count === 10 && personalMovieDB.count <= 30) {
  console.log('Вы классический зритель');
} else if (personalMovieDB.count > 30) {
  console.log('Вы киноман');
} else {
  console.log('Произошла ошибка');
}

console.log(personalMovieDB);