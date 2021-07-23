'use strict';

let numberOfFilms;

function start () {
  numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
  }
}

start();

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms () {
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
}

rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
  } else if (personalMovieDB.count === 10 && personalMovieDB.count <= 30) {
    console.log('Вы классический зритель');
  } else if (personalMovieDB.count > 30) {
    console.log('Вы киноман');
  } else {
    console.log('Произошла ошибка');
  }
}

detectPersonalLevel();

function showMyDB() {

  if (!personalMovieDB.privat) {
    console.log(personalMovieDB);
  }

}

showMyDB();

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, '');
  }
}

writeYourGenres();

// console.log(personalMovieDB);