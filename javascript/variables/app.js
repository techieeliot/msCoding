// variable.. let is not block-scoped
var foo = 'pen';
var bar = 'hello world';
/* shift + alt + a */
console.log(foo);
console.log(bar);

// let example... let is block-scoped
let baz = 'hola mundo';

// const example... const is block-scoped
const boo = 'pizza';

console.log(baz);
console.log(boo);

// camel case example
let freeCodeCamp = 'Free Code Camp';

// capitalization matters, plus an example of multiplication (*) using variables
var payRate = 18;
var payPerWeek = payRate * 40;
var payPerMonth = payPerWeek * 4;
var payPerYear = payPerMonth * 12;
console.log(payPerYear, payPerMonth, payPerWeek);


// data types 

// strings
var string = 'hello';
var anotherString = 'world';
var broken = `You can't do this` // 'you can't do this' is broken
var anotherEx = `Bryce said,"This is cool"` // work 'Bryce said, "This is cool!"'
var fix2 = "you can\'t do this" // insert the /' before the
var yetAnotherString = '0';

// integers
var int = 2;
var anotherInt = 3.14;

console.log(anotherInt + int);

// math operations

/*  plus: + // also the concatenation symbol
    minus: -
    times: *
    divide: /
    modulus: %
    single equal sign(assignment operator): =
*/


// boolean
var bool = true;
var bool2 = false;

// change, or overwrite, the value of bool2
bool2 = true;
console.log(bool2);

// value reassignment
var temp = 1; // 1
temp = 2; // 2
temp = temp + 2; // 2 + 2 = 4
temp = temp - 1; // 4 - 1 = 3
console.log(temp); // 3

// concatenation
var concat = 'hello' + 'world'; // string 'helloworld'
concat = `hello world`
console.log(concat);

//what do you think will output
var result = '2' + 3; // string: '23' the string coerces the number in concatenation
console.log(result);

result = ('2' * 1) + 3; // integer: 5 & the number is coerced


var result2 = '2' * 3; // integer: 6 the integer coerces the string in multiplication

var cow; // declare a variable called cow
console.log(cow);
cow = 'moooo!' // reassignment of cow
console.log(cow);

// console.log(chicken); // error will tell you it's not defined

/**
 * 
 * javascript is backward compatible to older versions of javascript
 * it is the only one that can do that
 * 
 * 
 * 
 *  */ 


console.log(result2);

console.log(`${string} ${anotherString}`);

// console.log(broken, anotherEx, fix);

// day 3 lecture

// increment "++"
// decrement "--"

var foo2 = 0;
foo2++; // outputs 1
foo2++; // outputs 2
console.log(foo2++); //outputs 2
console.log(foo2); // outputs 3
console.log(++foo2); //outputs 4

foo2--; // outputs 3
console.log(foo2);

// +=
// -=

var number = 0;
number += 1; // equivalent of ++
number += 5; // number = number + 5;
console.log(`${number} is the value of number`);

number -= 6; // number = number - 5;
console.log(`${number} is the value of number`);

number = 3;
number *= 6; // number = number * 5;
console.log(`${number} is the value of number`);

number /= 6; // number = number / 5;
console.log(`${number} is the value of number`);

var bazMan, watMan, watVader;
var booRidley = "dude", yoMomma = "Gina";


/**
 * naming conventions for variables:
 * - don't use reserved keywords, such as break, boolean, return
 * - no numbers can start a variable
 * - variables are case sensitive
 * - underscores can be used, but they are typically not used at the beginning because other programming languages indicate private variables
 * 
 * 
 *  */ 
var _DONOTCHANGEME = 0; // technically ok, but not conventional

// paid time off fixed rate of 5 hours per paycheck paid bi-weekly.
// how many hours will you have accrued at the end of a year

var ptoRate = 5;
var workDay = 1;
var biWeekly = workDay * 10;
var ptoHours = []
var weekPerYear = 52;
var checkPerYear = weekPerYear/2;
var ptoPerYear = ptoRate * checkPerYear;
console.log(ptoPerYear);

function calcTimeOff(num) {
    // do stuff
    return num;
}

// psuedo code can help you problem solve step by step in English statements
/**
 * START
 *  RECEIVE input = 5
 *  SET thing = input
 *  SET thingTimesFive = thing x 5
 *  DISPLAY "Here is the input times 5: thingsTimesFive"
 * END
 * 
 * pseudo code helps you avoid making spaghetti code
 * 
 * look up articles on pseudo code keywords
 */

// SCOPE

// global
 var foo3 = 'hello';
 let bar2 = 'mundo';

//  var is global
// let is block scoped

 { // these brackets create an objects and local scope inside of it
    // local scope
    // let and const are block scoped

    var faz = 'hola';
    let bar2 = 'world';
    bar2 = 'jackson'
    console.log(bar2);
    const yo = 'yoyo';
    // yo = 'yoyo ma' // this will error the const
    console.log(yo); // outputs yoyo
    // don't beat yourself up when you don't figure it out the first time
 }

 console.log(foo3);
//  what will log for bar?
 console.log(bar2); // mundo
//  console.log(yo); // this will error if uncommented
 console.log(faz); // this will go into the scope and output hola

//  naming something in a particular scope can stop you from poluting the global scope;


// example where const cannot do this thing that var and let do
var thing = 1;
let thing2 = 2;
const thing3 = 3;
const thing4 = [];

thing = "magig";
thing2 = "thingy and no error";
// thing3 = "error"; // js doesn't like this change
thing4.push(1);
console.log(thing4);

/**
 * start with what you know
 * don't get stumped at what you can't do
 * 
 * 
 */


