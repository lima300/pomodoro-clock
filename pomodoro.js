let min = 0;
let segs = 10;
let count = 1;
let timer;
let br = false;
let music = null;
const alarm = document.getElementById('alarm');

function start() {
    document.querySelector('#stop').style.display = "block";
    document.querySelector('#start').style.display = "none";
    document.querySelector('#reset').style.display = "none";
    document.querySelector('#label').style.display = "block";
    document.querySelector('#break-label').style.display = "none";

    document.querySelector('#label').innerHTML = ("Session " + count);

    if (music) {
        music.play();
    }

    timer = setInterval( function() {  
        if (segs != 0) {
            segs--;
        } else {
            segs = 59;
            min--;
        }

        document.querySelector('#display').innerHTML = (updateMin() + ":" + updateSegs());

        if (min == 0 && segs == 0) {
            clearInterval(timer);
            br = true;
            document.querySelector('#break-label').innerHTML = ("Break " + count);
            document.querySelector('#break-label').style.display = "block";
            document.querySelector('#label').style.display = "none";
            document.querySelector('#startB').style.display = "block";
            document.querySelector('#stop').style.display = "none";
            if (music) {
                music.pause();
            }
            alarm.play();
        }
    }, 1000);
}

function coffeeTime() {
    document.querySelector('#startB').style.display = "none";
    document.querySelector('#stop').style.display = "block";
    if (count < 5) {
        min = 1;
    } else {
        min = 30;  
    }
    segs = 0;
    document.querySelector('#display').innerHTML = (updateMin() + ":" + updateSegs());

    timer = setInterval( function() {  
        if (segs != 0) {
            segs--;
        } else {
            segs = 59;
            min--;
        }

        document.querySelector('#display').innerHTML = (min + ":" + segs);

        if (min == 0 && segs == 0) {
            clearInterval(timer);
            br = false;
            reset();
            document.querySelector('#start').style.display = "block";
            document.querySelector('#stop').style.display = "none";
            if (music) {
                music.pause();
            }
            alarm.play();
            count ++;
        }
    }, 1000);
}

function updateMin() {
    return min < 10 ? "0" + min : min;
}

function updateSegs() {
    return segs < 10 ? "0" + segs : segs;
}

function stop () {

    clearInterval(timer);
    document.querySelector('#stop').style.display = "none";
    document.querySelector('#start').style.display = "block";
    document.querySelector('#reset').style.display = "block";
    if (music) {
        music.pause();
    }

}

function reset() {
    if (!br) {
        min = 25;
        
    } else {
        min = 5;
    }

    segs = 0;

    document.querySelector('#display').innerHTML = (updateMin() + ":" + updateSegs());
    if (music) {
        music.currentTime = 0;
    }
}

function musicSelector(value) {
    if (music) {
        music.pause();
    }
    switch(value) {
        case 0: music = document.getElementById('forest'); break;
        case 1: music = document.getElementById('ocean'); break;
        case 2: music = document.getElementById('rain'); break;
        case 3: music = document.getElementById('peace'); break;
        case 4: music = document.getElementById('cafe'); break;
    }

    if (document.getElementById('stop').style.display == "block") {
        music.play();
    }
}
