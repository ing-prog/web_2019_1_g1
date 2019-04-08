"use strict";

/**
 * Задача: 
 * определить является ли число простым
 * 
 * Запуск: 
 * node prog_4.js
 */

let p, i, x, ost;

x = 13;

p = 0;
i = 2;

while(i < x) {
    ost = x % i;
    if(ost === 0) {
        p = 1;
    }
    i = i + 1;
}

if(p === 0) {
    console.log("Simple");
} else {
    console.log("No Simple");
}

