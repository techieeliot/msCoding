let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let display = document.getElementById('output');
let counter = 0;

plus.onclick = incrementer;
minus.onclick = decrementer;

function incrementer(){
    counter+= 1;
    display.innerText = counter;
};

function decrementer(){
    counter-= 1;
    display.innerText = counter;
};

//testing
