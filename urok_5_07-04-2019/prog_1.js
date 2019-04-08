"use strict";

/**
 * Задача: 
 * найти максимальное из трех чисел
 * 
 * Запуск: 
 * node prog_1.js
 */

let a, b, c;

a = 250;
b = 100;
c = 17;

if(a > b) {
    if(a > c) {
        console.log(a);
    } else {
        console.log(c);
    }
} else {
    if(b > c) {
        console.log(b);
    } else {
        console.log(c);
    }
}
