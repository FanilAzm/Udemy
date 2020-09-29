const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieBD = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

const lastWatchFilm = prompt('Один из последних просмотренных фильмов?');
const raiting = prompt('На сколько оцените его?');

personalMovieBD.movies[lastWatchFilm] = raiting;

console.log(personalMovieBD);