"use strict";

// // let num = 20;

// // function showFirstMessage (text) {
// //     console.log(text);

// //      num = 10;
// // }

// // showFirstMessage("Hello world");
// // console.log(num)


// // function calc(a,b) {
// //     return (a + b);
// // }

// // console.log(calc(4, 3));
// // console.log(calc(10, 2));
// // console.log(calc(1, 6));

// // function ret () {
// //     let num = 50;
// //     return num;
// // }

// // const anotheNum = ret();

// // console.log(anotheNum);

// // const logger = function() {
// //     console.log("Hello");
// // };

// // logger();

// // const calc = (a,b) => a+b;

// const usdCurr = 28;
// const eurCurr = 32;
// const discount = 0.9;

// function convert(curr ,amount) {
//     return curr * amount;
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

// function promotion(result) {
//     console.log(result * discount);
    
// }

// const res = convert(500, eurCurr);
// promotion(res);

// function test () {
//     for ( let i = 0; i < 5; i++){
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }
// test();

// function doNothing (){};
// console.log(doNothing() === undefined);

// function sayHello (userName) {
//     let result = `Привет,${userName}!`;
//     return result;
// }

// console.log(sayHello('Alex'));

// function returnNeighboringNumbers(number) {
//     const Array = [];

//     for(let i = 0; i <= 2; i++){
//          Array[i] = number++ - 1 ;
//     }
//     return Array;
// }

// returnNeighboringNumbers(5);

// function getMathResult(number, counter) {
//     if(counter > 0 && typeof(counter) == typeof(number)){
//         const result = [];
//         for (let i = 1; i <= counter; i++ ) {
//             result[i - 1] = number*i;
//         }
//         console.log(`${result.join('---')}`);
//     } else {
//         console.log(number);
//         return number;
//     }
// }

// getMathResult(5,3);

// const str = "test";
// const arr = [1,2,4];

// console.log(str.toUpperCase());
// console.log(str.toLocaleLowerCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf('fruit'));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;

// console.log(Math.round(num));

// const test ="12.2px";

// console.log(parseInt(test));

// console.log(parseFloat(test));