"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let watched_movie = prompt("Один из последних просмотренных фильмов: ", "");
let rating_movie = prompt("На сколько оцените его? ", "");

personalMovieDB.movies[watched_movie] = rating_movie;

console.log(personalMovieDB);
