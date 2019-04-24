"use strict";

let t1, t2, btn, a, b, s, label, timeLabel, n, pauseBtn, pause;

window.onload = function() {
    t1 = document.getElementById("t1");
    t2 = document.getElementById("t2");
    btn = document.getElementById("btn");
    label = document.getElementById("label");
    timeLabel = document.getElementById("timeLabel");
    pauseBtn = document.getElementById("pauseBtn");

    btn.onclick = function() {
        a = t1.value;
        b = t2.value;
        a = parseInt(a);
        b = parseInt(b);
        s = a + b;
        label.innerHTML = s;    
    }

    n = 0;
    pause = 0;

    pauseBtn.onclick = function() {
        if(pause === 0) {
            pause = 1;
        } else {
            pause = 0;
        }
    }

    setInterval(function() {
        if(pause === 0) {
            n = n + 1;
            timeLabel.innerHTML = n;
            if(n >= 9) {
                n = -1;
            }
        }
    }, 1000);
}
