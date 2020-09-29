const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieBD = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

for (let i = 0; i < 2; i++) {
	const lastWatchFilm = prompt('Один из последних просмотренных фильмов?');
	const raiting = prompt('На сколько оцените его?');

	if (lastWatchFilm !== '' && raiting !== '' && lastWatchFilm !== null && raiting !== null && lastWatchFilm.length < 50) {
		personalMovieBD.movies[lastWatchFilm] = raiting;
		console.log('done');
	} else {
		console.log('error');
		i--;
	}
}

console.log(personalMovieBD);

if (personalMovieBD.count < 10) {
	console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieBD.count > 10 && personalMovieBD.count < 30) {
	console.log('Вы классический зритель');
} else if(personalMovieBD.count > 30) {
	console.log('Вы киноман');
} else {
	console.log('Произошла ошибка');
}


