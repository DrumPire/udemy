/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';
const promoBlock = document.querySelectorAll('.promo__adv img'),
      posterBg = document.querySelector('.promo__bg'),
      filmGenre = posterBg.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list');


const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1
promoBlock.forEach(item => {
    item.remove();
});
// 2
filmGenre.textContent = 'драма';
// 3
posterBg.style.backgroundImage = 'url("img/bg.jpg")';
// 4
movieList.innerHTML = '';
movieDB.movies.sort();

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
    <li class="promo__interactive-item">${i + 1} ${film}
        <div class="delete"></div>
    </li>
    `;
});


