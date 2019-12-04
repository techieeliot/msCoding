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
/**
 * 
 */
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

console.log(chicken); // error will tell you it's not defined

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

console.log(broken, anotherEx, fix);






