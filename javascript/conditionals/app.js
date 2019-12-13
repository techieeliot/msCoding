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
 *    !        <--- NOT OPERATOR (AKA BANG!)
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


// NESTING IF STATEMENTS
/**
 * Decision Tree
 * ----
 * 
 * |_1. Dog 2. Cat
 * 
 * ----
 * 
 * |_
 * 
 * ----
 * 
 * |_3.Snake 4. Fish
 * 
 */

let input1 = "Dog";
let input2 = "Cat";
let input3 = "Cat";

// Do you want an pet that likes to be with people?
// input1 has option1 = "Yes" => "Dog" and option2 "No" => "Cat"
if (input1 === "Dog") {
    // Do you want an pet that goes on walks?
    // input2 has option1 = "Yes" => "Dog" and option2 "No" => "Cat"
    if (input2 === "Dog") {
        if (input3 === "Dog") {
            // Do you want an pet that tries to protect your house?
            // input2 has option1 = "Yes" => "Dog" and option2 "No" => "Cat"
            console.log("You would definitely like a dog!");
        } else if (input3 === "Cat") {
            console.log("You would probably like a dog!")
        }   
    } else if (input2 === "Cat") {
        if (input3 === "Cat") {
            console.log ("You would probably like a cat!")
        } else if (input3 === "Dog") {
            console.log("You would probably like a dog!"); 
        }
    }
} else if (input1 === "Cat") {
    if (input2 === "Cat") {
        if (input3 === "Cat") {
            console.log("You would definitely like a cat!");
        } else if (input3 === "Dog") {
            console.log("You would probably like a cat!")
        }   
    } else if (input2 === "Dog") {
        if (input3 === "Dog") {
            console.log ("You would probably like a dog!")
        } else if (input3 === "Cat") {
            console.log("You would probably like a cat!"); 
        }
    }
}

/**
 * Decision Tree
 * ----
 * 
 * |_1. Dog     2. Cat
 * |_3. Snake   4. Fish
 * 
 * ----
 * 
 * |_
 * 
 * ----
 * 
 * |_1. Dog     2. Cat
 * |_3.Snake    4. Fish
 * 
 */


//  TRUTHY and FALSEY
/**
 * Number 0             -> Falsey
 * false                -> Falsey
 * Empty string ""      -> Falsey
 * undefined             -> Falsey
 * nul                  -> Falsey
 * NaN                  -> Falsey
 * 
 * 
 */

let numba = 0;
console.log("Is zero false? It is...");
if (numba) {
    console.log(true);
} else {
    console.log(false);
}
let bool = false;
console.log("Is false false? It is...");
if (bool) {
    console.log(true);
} else {
    console.log(false);
}
let str = "";
console.log("Is an empty string false? It is...");
if (str) {
    console.log(true);
} else {
    console.log(false);
}
let def = undefined;
console.log("Is undefined false? It is...");
if (def) {
    console.log(true);
} else {
    console.log(false);
}
let nothing = null;
console.log("Is null false? It is...");
if (nothing) {
    console.log(true);
} else {
    console.log(false);
}
let notNum = NaN;
console.log("Is not a number false? It is...");
if (notNum) {
    console.log(true);
} else {
    console.log(false);
}

// Example of checking that something is false
let arrayMissingThirdIndex = [1,2,3];
if (arrayMissingThirdIndex[3]) {
    console.log(true);
} else {
    console.log("You need to add another item to your array!");
}

console.log("Is not NaN == false? It is...");
if (NaN == false) {
    console.log("Yup!!!");
    
}
if ("" == false) {
    console.log("Yup!!!");
    
}
if (null == false) {
    console.log("Yup!!!");
    
}
if (false == false) {
    console.log("Yup!!!");
    
}
if (0 == false) {
    console.log("Yup!!!");
    
}
if ("" == false) {
    console.log("Yup!!!");
    
}