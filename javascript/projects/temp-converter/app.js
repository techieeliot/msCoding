const FAHRENHEIT = "°F";
const CELSIUS = "°C"
let myTemp = document.getElementById('my-temp');
let myUnit = document.getElementById('my-unit');
let f, newCelsius, newFahrenheit;
let convertBtn = document.getElementById('convert');
let currentTemp = Math.round(myTemp.innerText);
if(myUnit == FAHRENHEIT){
    f = true;
} else {
    f = false;
}
convertBtn.addEventListener('click', convertTemp)
f = true;
function convertTemp() {
    console.log(myTemp.innerText);
    console.log(f);
    if (f == true) {
        newFahrenheit =  currentTemp;
        newCelsius = (currentTemp - 32) * 1.8;
        myTemp.innerText = newCelsius;
        myUnit.innerText = CELSIUS;
        f = false
        currentTemp = newCelsius;
    } else {
        newCelsius = currentTemp;
        newFahrenheit = (currentTemp * 1.8) + 32;
        myTemp.innerText = newFahrenheit;
        myUnit.innerText = FAHRENHEIT;
        f = true;
        currentTemp = newFahrenheit
    }
}


