// function myfunc(arg) {
//     // do stuff
// }
// function fucntionName(params) {
//     //do stuff
// }

function sum(a, b) {
    console.log('what is the sum of '+ a +' and '+ b +'?');
    
    console.log(a + b);
}

sum(50, 50);


function goodMorning(name = 'Stranger') {
    console.log(`Good Morning, ${name}!`);
    
}

goodMorning();
goodMorning('Eliot');

// depending on the time the function is accessed, then output: 
/** 
 * good morning
 * good afternoon
 * good evening
 * good night
 */

 // take in a number and decide if the number is even or odd;

 function evenOrOdd(num) {
     if (num%2 == 0) {
        console.log('even');
     } else {
        console.log('odd');
     }
 }

 evenOrOdd(102039);

 // take a number < 21 => juice
 // take a number >= 21 => wine

 function ginAndJuice(age){
     if(age >= 21) {
         console.log("gin");
     } else {
         console.log("juice");
     }
 }

 ginAndJuice(21);
 ginAndJuice(20);

 // function taking in a number and 0 to 6.9 acidic, 7.0 neutral, and 7.1 to 14

function testPh(num){
    if (typeof num != 'number' || num < 0 || num > 14){
        console.log(`Your input must be a number between 0.0 and 14.0`);
    } else if (num == 7) {
        console.log(`${num} is neutral`);
    } else if (num > 7) {
        console.log(`${num} is base`);  
    } else {
        console.log(`${num} is acidic`);
    };
}
testPh();

// take C convert to F or F convert to C.

function convertTemperature(value, unit) {
    if (unit == 'F') {
        let celsius = Math.floor(5/9 *(value - 32));
        console.log(`The temperature ${value} degrees Farenheit is also ${celsius} degrees Celsius`);        
    } else if (unit == 'C'){
        let farenheit = Math.floor((value * (9/5)) + 32);
        console.log(`The temperature ${value} degrees Celsius is also ${farenheit} degrees Farenheit`);  
    } else {
        console.log(`The unit that your using must be Celsius (C) or Farenheit (F)`);
    } 
}

convertTemperature(30, 'C');

{
    //calculate grades whether they are a specific letter grade
    function grader(num) {
        let grade;
        if (typeof num != 'number') {
        console.log(`The value is in an incorrect format and should be a number between 0 and 100`)
        } else if (num < 0 || num > 100) {
        console.log(`The value should be a number between 0 and 100`)
        } else if (num < 60) {
            grade = 'F';
            console.log(`You earned a ${grade}.`);
        } else if (num < 70) {
            grade = 'D';
            console.log(`You earned a ${grade}.`);
        } else if (num < 80) {
            grade = 'C';
            console.log(`You earned a ${grade}.`);
        } else if (num < 90) {
            grade = 'B';
            console.log(`You earned a ${grade}.`);
        } else {
            grade = 'A';
            console.log(`You earned an ${grade}.`);
        }
    }
    
    grader(78);
    


}