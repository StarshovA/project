"use strict"

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == '' ||  numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
    
        let watched_movie = prompt("Один из последних просмотренных фильмов: ", "");
        let rating_movie = prompt("На сколько оцените его? ", "");
        if (watched_movie != "" && rating_movie != "" && watched_movie != null && rating_movie != null && watched_movie.length < 50) {
        personalMovieDB.movies[watched_movie] = rating_movie; 
        } else {
            i--;
        }
    }
}

rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        alert("Просмотрено довольно мало фильмов");
    }else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
        alert("Вы классический зритель");
    }else if (personalMovieDB.count > 30) {
        alert("Вы киноман");
    }else {
        alert("Произошла ошибка");
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
    }
}

writeYourGenres();

console.log(personalMovieDB);
