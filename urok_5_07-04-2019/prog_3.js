"use strict";

/**
 * Задача: 
 * вывести сумму целых чисел на отрезне от a до b
 * 
 * Запуск: 
 * node prog_3.js
 */

let a, b, s;

a = 20;
b = 25;
s = 0;

while(a <= b) {
    s = s + a;
    a = a + 1;
}

console.log(s);
