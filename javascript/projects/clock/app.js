const clock = document.getElementById('clock');
const body = document.body;

function time(){
    let date = new Date();
    let seconds = date.getSeconds();
    let minutes = date.getMinutes();
    let hours = date.getHours();
    let period = 'a.m.'
    if (hours > 17 || hours < 6) {
        body.className = 'dark';
    } else if (hours < 8 || hours > 15){
        body.className = 'orange';
    };

    if(hours > 12) {
        period = 'p.m.';
        hours -= 12;
    }
    if(minutes < 10){
        minutes = `0${minutes}`;
    }
    if(seconds < 10){
        seconds = `0${seconds}`;
    }

    clock.innerText = `${hours}:${minutes}:${seconds} ${period}`;

    requestAnimationFrame(time)
}

time();



