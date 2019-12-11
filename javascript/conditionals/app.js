// CONDITIONALS
// if statement
if (1 == 1) {
    console.log("Yo, I true")
}
let hey = 'hello';
if (hey == 'hello'){ // 'hello' == 'hello' -> true
    console.log('TRUE!!!');
}

/**
 * 
 *    if (CONDITION) {
 *      // DO STUFF IF TRUE
 *    }
 * 
 *    =        <--- assignment operator
 *    ==       <--- comparison equality operator (loose)
 *    ===      <--- strict equality operator (equal AND same data type)
 *    <        <--- less than
 *    >        <--- greater than
 *    <=       <--- less than or equal
 *    >=       <--- greater than or equal
 *    !=       <--- not equal value
 *    !==       <--- not equal value & type
 *    &&       <--- AND
 *    ||       <--- OR
 *    !        <--- NOT
 *    
 *    conditionals always evaluate to a boolean value (true or false) 
 */

 let num = 1;


 // if statements
if (num < 2){ // 1 < 2 -> true
    console.log('TRUE!!!');
}

if (num < 2){ // 1 < 2 -> true
    console.log('TRUE!!!');
}

if (num <= 1) {
    console.log(true);
}

if (num !== '1') {
    console.log("num is not strictly equal to '1'.");
}


//if else
if (num < 3) {
    console.log(true); // logs true 
} else {
    console.log(false);  
}

if (num > 3) {
    console.log(true);   
} else {
    console.log(false); // logs false 
}

// you don't always need an if else statement

let email = 'eliot587@gmail.com';

if (email != 'eliot587') {
    // open pop-up
}

// else if example
let thing = 4;
if (thing >= 100) {
    console.log('thing is more than 99');
} else if ( thing >=50){
    console.log('thing is more than 49');   
} else {
    console.log('thing is less than 49');    
}

// mulitple else if conditions
if (thing >= 100) {
    console.log('thing is more than 99');
} else if ( thing >=50){
    console.log('thing is more than 49');
} else if ( thing >=25){
    console.log('thing is more than 24');   
} else if ( thing >=10){
    console.log('thing is more than 9');  
} else if ( thing >=5){
    console.log('thing is more than 4'); 
} else {
    console.log('thing is less 5');
}

// you do not have to have an else in an else if.


let multipleChoice = "D";
switch (multipleChoice) {
    case "A":
        console.log('Abe Lincoln is incorrect');
        break;
    case "B":
        console.log('George Washington is incorrect');
        break;
    case "C":
        console.log('Bill Clinton is incorrect');
        break;
    case "D":
        console.log('James Madison is correct');
        break;      
    default:
        console.log('Teddy Roosevelt is incorrect');
        break;
}
// switches use strict comparison

let numero = 0;
switch (numero) {
    case "0":
        console.log('Abe Lincoln is incorrect'); // you would expect this
        break;
    case 1:
        console.log('George Washington is incorrect');
        break;
    case 2:
        console.log('Bill Clinton is incorrect');
        break;
    case 3:
        console.log('James Madison is correct');
        break;      
    default:
        console.log('Teddy Roosevelt is incorrect'); // output is here
        break;
}
let choice = 'hellur';
switch (choice) {
    case "hello":
    case "hellur":
        console.log('English', '(Madea in the house, baby!)');
        break;
    case "hola":
        console.log('Spanish');
        break;  
    default:
        console.log('Your language is not English or Spanish, sorry. :('); // output is here
        break;
}

console.log('brian' < 'bryce'); // alphabetization true

console.log('H' == 'h'); // false


// AND / OR

// && / ||

console.log(1 < 2 && 1 > 0);
console.log(1 < 2 && 3 < 0);
console.log(1 < 2 || 3 < 0);
console.log(1 == 2 || 3 == 0);



