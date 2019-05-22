"use strict";

let can, holst, xx, yy, w, a, s, d, speed, xE, yE;

window.onload = function() {
    can = document.getElementById("can");
    holst = can.getContext("2d");

    w = 0;
    a = 0;
    s = 0;
    d = 0;

    xE = 400;
    yE = 100;

    function drawEnemy() {
        holst.fillStyle = "#FF0000";
        holst.fillRect(xE, yE, 50, 50);
    }

    xx = 200;
    yy = 300;

    function drawFon() {
        holst.clearRect(0, 0, 800, 600);
        holst.fillStyle = "#CCCCCC";
        holst.fillRect(0, 0, 800, 600);
    }

    drawFon();

    function drawHero() {
        holst.fillStyle = "#0000FF";
        holst.fillRect(xx, yy, 50, 50);
    }

    drawHero();

    window.onkeydown = function(e1) {
        console.log(e1.keyCode);
        if(e1.keyCode === 87) w = 1;
        if(e1.keyCode === 65) a = 1;
        if(e1.keyCode === 83) s = 1;
        if(e1.keyCode === 68) d = 1;
    }

    window.onkeyup = function(e2) {
        console.log(e2.keyCode);
        if(e2.keyCode === 87) w = 0;
        if(e2.keyCode === 65) a = 0;
        if(e2.keyCode === 83) s = 0;
        if(e2.keyCode === 68) d = 0;
    }

    speed = 7;

    function moveHero() {
        if(a === 1) xx = xx - speed;
        if(d === 1) xx = xx + speed;
        if(w === 1) yy = yy - speed;
        if(s === 1) yy = yy + speed;
    }

    function hit(a, b, c) {
        if(a <= c && c <= b) {
            return 1;
        } else {
            return 0;
        }
    }

    function hitPersons() {
        if(hit(xx, xx + 50, xE) === 1) {
            if(hit(yy, yy + 50, yE) === 1) {
                xE = 5000;
            }
        }

        if(hit(xE, xE + 50, xx) === 1) {
            if(hit(yE, yE + 50, yy) === 1) {
                xE = 5000;
            }
        }
    }

    setInterval(function() {
        drawFon();
        moveHero();
        drawHero();
        drawEnemy();
        hitPersons();
    }, 50);
}

