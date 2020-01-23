let tip = document.getElementById('calculate');
let inputValue;
let output = document.getElementById('myOutput');
let outputText = document.getElementById('myOutput').innerText;

tip.onclick = calcTip;

function calcTip() {
    setValue();
    console.log(inputValue);
    
    let tipAmount = (inputValue * 0.15)
    console.log(tipAmount);
        
    let total = Number(inputValue) + tipAmount;

    output.innerHTML = `<p id="tip-amount">15% Tip = ${formatter.format(tipAmount)}</p>
                        <p id="total-amount">Total = ${formatter.format(total)}</p>`;
};

function setValue() {
    inputValue = document.getElementById('myInput').value;
}

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })



