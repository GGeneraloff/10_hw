const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function () {
        for (let i = 0; i < 3; i++) {
            const genre = prompt('Ваш любимый жанр под номером ' + (i + 1))

            if (genre == null || genre == "") {
                i--;
            } else {
                personalMovieDB.genres[i] = genre;
            }
        }
        console.log(personalMovieDB.genres);
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat == false) {
            personalMovieDB.privat = true;
        } else {
            personalMovieDB.privat = false
        }
    }

};

personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
personalMovieDB.writeYourGenres();
personalMovieDB.genres.forEach(function (item, i, arr) {
    console.log(`Любимый жанр ${i+1} - это ${item}`);
});