/**
 * 
 * compare a given date to today's date and confirm that they're at least 18.
 * 
 * Is the person over 18?
 * 
 */
 const input = document.getElementById('dob');
 const output = document.getElementById('output');

// document.addEventListener('keydown', console.log(inputValue));
const myBirthYear = 1987;

function areTheyLegal(year){
    let result = false;
    let date = new Date();
    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let today = date.getUTCDay();
    let age = currentYear - year;
    if(age > 17) {
        result = true;
    }
    console.log(currentMonth);
    console.log(today);
    
    output.innerText = `If your birthday is in ${myBirthYear}, then it is ${result} that you are over 18 years old.`;
};

areTheyLegal(myBirthYear);

 

 
