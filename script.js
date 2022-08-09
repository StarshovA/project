"use strict"

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < 2; i++) {
    
    let watched_movie = prompt("Один из последних просмотренных фильмов: ", "");
    let rating_movie = prompt("На сколько оцените его? ", "");
    if (watched_movie != "" && rating_movie != "" && watched_movie != null && rating_movie != null && watched_movie.length < 50) {
       personalMovieDB.movies[watched_movie] = rating_movie; 
    } else {
        i--;
    }
}

if (personalMovieDB.count < 10) {
    alert("Просмотрено довольно мало фильмов");
}else if (personalMovieDB.count > 10 && personalMovieDB.count < 30) {
    alert("Вы классический зритель");
}else if (personalMovieDB.count > 30) {
    alert("Вы киноман");
}else {
    alert("Произошла ошибка");
}

console.log(personalMovieDB);
