var min = 0;
var sec = 0;
var msec = 0;

var dmin = document.getElementById("min");
var dsec = document.getElementById("sec");
var dmilisec = document.getElementById("msec");
var interval;
var isRunning = false;

function timer(){
    msec++;
    dmilisec.innerHTML = msec;
  
    if(msec >=100){
        sec++;
        dsec.innerHTML = sec;
        msec = 0
    }else if(sec >= 60){
        min++;
        dmin.innerHTML = min;
        sec = 0;
    }
}

function start(){
    if (!isRunning) {
        interval = setInterval(timer, 10);
        isRunning = true;
    }
    
}

function stop(){
        clearInterval(interval)
        isRunning = false;
}

function  reset(){
    min = 0;
    sec= 0;
    msec = 0;

    dmin.innerHTML = min;
    dsec.innerHTML = sec;
    dmilisec.innerHTML = msec;
    stop();
}





















