//Arrays - list like object that allows us to store more than one thing
var arr = []; //this is called an array literal bc we use the [] symbol

var arr2 = [1,2,3];  //values are , separated = syntax
var arr3 = ['Bryce, Herbert, Javier']; //values are , separated in quotations = syntax
var arr4 = ['Bryce', 42, 'javier', 'Herbert', 40]; 
// data in an arr is accessed in zero based indices (start counting from zero)
console.log(arr3[2]); //this would log Javier bc it counts from zero not from one
console.log(arr4[3]); // this would log Herbert bc it counts from zero 
console.log(arr4[20]); // this would log Undefined bc the array is not on 20

var arr5 = ['Bryce', [1,2,3], 4, 'Herbert', false]; //the array is at 1 indices [1,2,3]
console.log(arr5[1]); //1,2,3 bc we used the 1 indice and so all the numbers will show
console.log(arr5[1][0]); //we get 1 bc its mean to do only what is in the 0 indice
//STRINGS HAVE A 0 BASED INDEX

var string = 'hello';
console.log(string[3]); //l
console.log("arr2:", arr2.length); // 3
console.log(arr4[arr4.length - 1]);  //

//MULTI-DIMENSIONAL ARRAYS
var arr6 = [
    [1,2,3], //0 index
    [4,5,6], //1 index
    [7,8,9], //2 index
]
console.log(arr6[1][1]); //5
console.log(arr6[2][0]); //7

var arr8 = [];
arr8 [0] = 'Bryce';
console.log(arr8); //using this method you can only assign one position at a time

//CRAZY TRAIN!!!! you can jump index
arr8[6] = 'WHAT';
console.log(arr8);

//USING .PUSH adds to the end of the array
var arr9 = [];
arr9.push('Bryce');
console.log(arr9);

arr9.push('cow', 'dog', 'foo',);
console.log(arr9);

arr9.push(2,[1,2,3],false);
console.log(arr9);

// HERO Generator 3 arrays Names, Powers, Adjective
// Give variable names relevant to context

var name = [];
name = ['Hulk', 'Thor', 'Spiderman'];

var adjective = [];
adjective = ['powerful', 'big', 'funny'];

var power  = [];
power = ['hits', 'hammer', 'climbing'];

console.log();

//Objects - 
//objects contain name ; value pairs separated by commas

var myObject = {
    firstName:'Eliot',
    lastName: 'Sanford',
    age: {
        month: 'August',
        date: 13,
        year: 1987
    },
    epicFeatures: {
        eyes: 'brown',
        hair: 'brown'
    },
    hometown: {
        city: 'Starkville',
        state: 'MS'

    },
    married: true,

}

const first = myObject.firstName;
const last = myObject.lastName;
const age = myObject.age.year;
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();
const myAge = currentYear - age;



console.log(last + ", " + first);

console.log("My eye color is "+ myObject.epicFeatures.eyes);

console.log("I'm from " + myObject.hometown.city + ", " + myObject.hometown.state + ".");

console.log(currentMonth+1);

console.log("Hello, my name is " + first + " "+ last + ", and I am " + myAge + " years old.");

myObject.gender = "male";

console.log(myObject.gender);

console.log(myObject);





