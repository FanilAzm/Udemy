
let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
	}
}

start();

const personalMovieBD = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

function rememberMyFilms() {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
	if (personalMovieBD.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieBD.count > 10 && personalMovieBD.count < 30) {
		console.log('Вы классический зритель');
	} else if(personalMovieBD.count > 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}

// detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieBD);
	}
}

showMyDB(personalMovieBD.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		const genresNumber = prompt(`Ваш любимый жанр под номером ${i}`);
		personalMovieBD.genres.push(genresNumber);
		// personalMovieBD.genres[i - 1] = genresNumber;
	}
}

writeYourGenres();
