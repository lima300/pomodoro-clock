let min = 25;
let segs = 0;
let count = 1;
let timer;
let br = false;

function start() {
    document.querySelector('#stop').style.display = "block";
    document.querySelector('#start').style.display = "none";
    document.querySelector('#reset').style.display = "none";
    document.querySelector('#label').style.display = "block";
    document.querySelector('#break-label').style.display = "none";

    document.querySelector('#label').innerHTML = ("Session " + count);

    timer = setInterval( function() {  
        if (segs != 0) {
            segs--;
        } else {
            segs = 10;
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
            segs = 10;
            min--;
        }

        document.querySelector('#display').innerHTML = (min + ":" + segs);

        if (min == 0 && segs == 0) {
            clearInterval(timer);
            br = false;
            reset();
            document.querySelector('#start').style.display = "block";
            document.querySelector('#stop').style.display = "none";
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

}

function reset() {
    if (!br) {
        min = 25;
        
    } else {
        min = 5;
    }

    segs = 0;

    document.querySelector('#display').innerHTML = (updateMin() + ":" + updateSegs());
}