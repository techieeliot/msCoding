
window.onload = function() {
    document.getElementById('temp-btn').addEventListener('click', sendTemp);
}

let tempBtn = document.getElementById('temp-btn')
let myTempSection = document.getElementById('my-temp')


function sendTemp() {
    let myTempInput = Number(document.getElementById('my-temp-input').value);
    
    let output = document.getElementById('my-output')
    output.innerHTML=`<span id="my-temp">${myTempInput}</span><span id="my-unit">°F</span></h2>`;
    console.log(myTempInput);
    
}

