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

// this is comment

let obj = {
    firstName: "Eliot",
    lastName: "Sanford"
}

console.log(obj.firstName);
// console.log(obj[firstName]);

let foo = 'firstName'
console.log(obj.foo); // undefined 
// you cannont pass a variable to dot notation

console.log(obj[foo]); // Eliot 
// you can pass a variable to bracket notation 
// obj[foo] = obj["firstName"]

obj.foo = 'Hello';
console.log(obj.foo);
obj['bar'] = 'World';
console.log(obj.bar);

obj[0] = 'zero';
obj[1] = 'one';
console.log(obj[0]);
// obj.0 will not work and do not do it.

let arr10 = [];
arr10['foo'] = 'bar';
console.log(arr10);
// do not add prop-value pair in an array.

let dude = {
    firstName: "Eliot",
    lastName: "Sanford",
    age: 32,
};

let bro = ['Eliot', 'Sanford', 32]

console.log(person2[0]); // not able to know what this is until output
console.log(person.firstName); // able to predict what the output should be

let people = {
    person1: "Eliot", 
    person2: "Elaine", 
    person3: "Elbert"
};

let peeps = ['Eliot', 'Elaine', 'Elbert'];



let teachers = [
    {
        firstName: "Eliot",
        lastName: "Sanford",
        age: 32,
        lang:['JavaScript', 'Python']
    },
    {
        firstName: "Elaine",
        lastName: "Weis",
        age: 42,
        lang: ['']
    }
] /**
it's best to use an array of objects to 
relate the information.

if it's like data in an array (e.g. see animal)
it's it's related data in an object 
(e.g. see person in people array, 
    each person has directly related properties)
    */ 
   
   console.log(people3[0]['lang'][0]);
   
   let animals = ['dog', 'cat', 'snake'] // these are all animals in the array
   
   
   let netflixProfiles = [
       {
           firstName: "Eliot",
           lastName: "Sanford",
           age: 32,
           lang:['JavaScript', 'Python'],
           acctNum: 58920730764
        },
        {
            firstName: "Ranjita",
            lastName: "Sanford",
            age: 30,
            lang: [''],
            acctNum: 58920730764
       }
    ];

