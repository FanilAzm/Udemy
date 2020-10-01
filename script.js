
const personalMovieBD = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
	start: function () {
		personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрели?');
		while (personalMovieBD.count == '' || personalMovieBD.count == null || isNaN(personalMovieBD.count)) {
			personalMovieBD.count = +prompt('Сколько фильмов вы уже посмотрели?');
		}
	},
	rememberMyFilms: function () {
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
	},
	detectPersonalLevel: function () {
		if (personalMovieBD.count < 10) {
			console.log('Просмотрено довольно мало фильмов');
		} else if (personalMovieBD.count > 10 && personalMovieBD.count < 30) {
			console.log('Вы классический зритель');
		} else if(personalMovieBD.count > 30) {
			console.log('Вы киноман');
		} else {
			console.log('Произошла ошибка');
		}
	},
	writeYourGenres: function () {
		for (let i = 1; i <= 3; i++) {
			const genres = prompt(`Ваш любимый жанр под номером ${i}`);
			if (genres !== '' && genres !== null) {
				personalMovieBD.genres.push(genres);
				// personalMovieBD.genres = genres.split(', ');
				// personalMovieBD.genres[i - 1] = genresNumber;
			} else {
				i--;
			}
		}
		personalMovieBD.genres.forEach((item, i) => {
			console.log(`Любимый жанр №${i+1} - это ${item}`);
		})
	},
	showMyDB: function (hidden) {
		if (!hidden) {
			console.log(personalMovieBD);
		}
	},
	toggleVisibleMyDB: function (hidden) {
		return hidden ? false : true;
	}
};

// personalMovieBD.start();
// personalMovieBD.rememberMyFilms();
// personalMovieBD.detectPersonalLevel();
personalMovieBD.showMyDB(personalMovieBD.privat);
personalMovieBD.writeYourGenres();
personalMovieBD.toggleVisibleMyDB(personalMovieBD.privat);
