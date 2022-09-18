"use strict";

let numberOfFilms;

function start(){
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');

    personalMovieDB.count = numberOfFilms;
    rememberMyFilms();
    writeYourGeners();
    detectPersonalLvl();
    showMyDB(personalMovieDB.privat);
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');
    }
}

function writeYourGeners() {
    let result = '';
    for (let i = 1; i <= 3; i++){
        result = prompt(`Ваш любимый жанр под номером ${i}`);

        personalMovieDB.genres[i - 1] = result; 
    }
}


const personalMovieDB = {
    count:'',
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
start();


function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

function rememberMyFilms() {
    for(let i = 0; i < 2; i++){
        const a = prompt("Один из просмотренных фильмов?", ''),
              b = +prompt("На сколько его оцените?", '');
    
              if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
                personalMovieDB.movies[a] = b;
              } else {
                console.log('error');
                i--;
              }
            }
}
function detectPersonalLvl () {
    if(personalMovieDB.count <= 10) {
        alert('Просмотренно довольно мало фильмов');
    } else if ( 10 < personalMovieDB.count <= 30) {
        alert('Вы классический зритель');
    } else if ( 30 < personalMovieDB.count) {
        alert('Вы киноман!');
    } else {
        alert('Произошла ошибка');
    }
}

