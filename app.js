"use strict";

const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');
const a = prompt("Один из просмотренных фильмов?", '');
const b = +prompt("На сколько его оцените?", '');

const c = prompt("Один из просмотренных фильмов?", '');
const d = +prompt("На сколько его оцените?", '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

