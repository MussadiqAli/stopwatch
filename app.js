var min = 0;
var sec = 0;
var msec = 0;

var interval;

var milisec = document.getElementById('msec');
var seco = document.getElementById("sec");
var mint = document.getElementById("min");



function timer(){
    msec++;
    milisec.innerHTML = msec;
    if(msec >= 100){
        sec++;
        seco.innerHTML=sec;
        msec=0;
    }
    else if (sec >= 60){
        sec = 0;
        min++;
        mint.innerHTML = min;
    }

}

function start(){
    interval = setInterval(timer,10)
    var disBtn = document.getElementById("btn")
    disBtn.setAttribute("disabled","")
}
function stop(){
    clearInterval(interval);
    var disBtn = document.getElementById("btn")
    disBtn.removeAttribute("disabled","")
}
function reset(){
    min = 0;
    sec = 0;
    msec = 0;
    milisec.innerHTML = msec;
    seco.innerHTML = sec;
    mint.innerHTML = min;
    clearInterval(interval);
    var disBtn = document.getElementById("btn")
    disBtn.removeAttribute("disabled","")
}