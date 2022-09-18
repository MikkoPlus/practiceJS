"use strict";

let i = 0;
do{
    const a = prompt("Один из просмотренных фильмов?", ''),
    b = +prompt("На сколько его оцените?", '');
    i++;


    if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
      personalMovieDB.movies[a] = b;
       console.log('done');
    } else {
      console.log('error');
      i--;
    }
} while (i < 2);

while(i < 2){
    const a = prompt("Один из просмотренных фильмов?", ''),
    b = +prompt("На сколько его оцените?", '');
    i++;


    if (a != null && b != null && a != '' && b != '' && a.length < 50 ){
      personalMovieDB.movies[a] = b;
       console.log('done');
    } else {
      console.log('error');
      i--;
    }
}


personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

firstStep: for(let i = 0; i <= 1; i++){
    numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", '');
    if(numberOfFilms == false) {
        i=0;
        continue firstStep;
    }
    personalMovieDB['count'] = numberOfFilms;
    secondStep: for(let k = 0; k < 2; k++){
        a = prompt("Один из просмотренных фильмов?", '');
        if(a != '' && a != null && a.length < 50){
            
            b = +prompt("На сколько его оцените?", '');
            if(b !== '0' && b != null){
                
                personalMovieDB.movies[a] = b;
            } else {
                console.log(typeof(b));
                console.log(b+'нет');
                k = k - 1;
                continue secondStep;
                


            }
            
        } else{
            alert(2);
            console.log(typeof(a));
            k = k - 1;
            continue secondStep;

        }
    }


    break firstStep;

}
console.log(personalMovieDB);
console.log( 5 === 5 && 3 > 1 || 5);

 
const hamburger = 3;
const fries = 3;
let cola;
const nuggets = 2;
 
console.log(cola);
if (hamburger === 3 && cola || fries === 3 && nuggets) {
   console.log('Done!');
};


let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;
 
if (hamburger || cola || fries === 3 || nuggets) {
   console.log('Done!');
}

while (num <= 55) {
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++; 
}

while(num < 55);

let num = 50;

for(let i = 1; i < 10; i++) {
    if(i === 6) {
        break;
        continue;
    }
    console.log(i);
}

for(let i = 0; i < 3; i++) {
    console.log(i);
    for(let j = 0; j < 3; j++) {
        console.log(j);
        
    }
}

let result = '';
const length = 7;

for(let i = 1; i < length; i++ ) {

    for(let j = 0; j < i; j++) {
        result += "*";  
    }

    result += '\n';
}

console.log(result);

first: for(let i = 0; i < 3; i++) {
    console.log(`First level: ${i}`);

    for(let j = 0; j < 3; j++) {
        console.log(`Second level: ${j}`);

        for(let k = 0; k < 3; k++) {
            if(k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}

let result = '';

for(let i = 1; i <= 10; i++ ) {
    
    if(i % 2) {
        continue;
    } else {
        console.log(`${i}`);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let i = 2;
while(i < 16) {
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

const arrayOfNumbers = [];

for(let i = 5; i <= 10; i++){
    arrayOfNumbers[i - 5] = i;
    console.log(arrayOfNumbers);
}

const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for(let i = 0; i < arr.length; i++){
    result[i] = arr[i];
    console.log(result[i]);
}

const data = [5, 10, 'Shopping', 20, 'Homework'];

for(let i = 0; i < data.length; i++){

    if(typeof(data[i]) == 'string'){
        data[i]+=' - done';

    } else if (typeof(data[i]) == 'number') {
        
        data[i] = data[i]*2;
    }
}

const data = [5, 10, 'Shopping', 20, 'Homework'];
const result = [];

for(let i = 1; i <= data.length; i++){
    
    result[i - 1] = data[data.length - i];
}

console.log(result);
for(let i = data.length ; i >= 0 ; i--){

    result[i] = data[i - 1];

    console.log(result[i]);
}

for(let i = 1; i <= data.length; i++){

    result[i - 1] = data[data.length - i];
    result[i] = result[i - 1];
    console.log(result[i]);
}

for(let i = data.length - 1; i >= 0; i--){
    result[i] = data[i];
    console.log(result[i]);
}

for(let i = 0; i <= data.length - 1; i++){
    result[i] = data[i];
    console.log(result[i]);
}

for(let i = result.length - 1; i >= 0; i--){
    result[i] = result[i];
    console.log(result[i]);
}

let result = '';
const Glength = 7;

for(let i = 1; i < Glength; i++ ) {

    for(let j = 0; j < i; j++) {
        result += "*";  
    }

    result += '\n';
    console.log(result)
}

const lines = 5;
let result = '';

for(let i = 1; i <= lines; i++){
    for(let j = 0; j > lines - i; j++){
        result +=' ';
    }
    for(let j = 0;j < 2 * i + 1; j++){
        result += '*';
    }
    result +='\n';
    console.log(result);
}

const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result)

const xArr = [];

for(let i = 0; i<10; i++){
    xArr[i] ='X';
}
console.log(xArr);

const Array = [];

for(let i = 1; i <= 10; i++){
    Array[i - 1] = i;
}
console.log(Array);