/**
 * 
 * LOOPS
 * 
 * for
 * for in
 * for of
 * do while
 * while
 * 
 * forEach
 * 
 * 
 * break
 * continue
 * 
 * 
 * let's talk about why we need loops?
 */
{

    // for (let index = 0; index < array.length; index++) {
        //     const element = array[index];
        
    // }
    
    let starWarsMovies = ['New Hope', 'Empire Strikes Back', 'Return of the Jedi', 'Force Awakens', 'Last Jedi', 'Rise of Skywalker']
    
    for(let i = 0; i < starWarsMovies.length; i++){
        const e = starWarsMovies[i];
        console.log(e);
    }
}

{
    for(let i=0; i < 10; i++){
        console.log(i);
        // How many times will this log a number?
    }
    
    for (let i = 10; i > 0; i--) {
        console.log(i);
        //what will happen here?
    }
    for(let i=0; i < 10; i+=2){
        console.log(i);
        //what will happen here?
    }
}
{
    // for (const key in object) {
    //     if (object.hasOwnProperty(key)) {
    //         const element = object[key];
            
    //     }
    // }

    const object = {
        name: 'Eliot',
        donLock: true,
        donKey: false
    }
    for (const key in object) {
        if (object.hasOwnProperty(key)) {
            const element = object[key];
            console.log(element);
              
        }
    }
}



{
    let starWarsCharacters = [{
        title: "New Hope",
        mainCharacters: ['Luke', 'Obi-Wan', 'Leia']
    }, 
    {
        title: "Empire Strikes Back",
        mainCharacters: ['Luke', 'Obi-Wan', 'Leia']
    }];

    // for (const key in starWarsCharacters) {
    //     const element = starWarsCharacters[key];
    // }
}
let arr = [1,2,3];
for (const idx in arr) {
    if (arr.hasOwnProperty(idx)) {
        const element = arr[idx];
        
    }
}

let string = 'hello';
for (const idx in string) {
    if (string.hasOwnProperty(idx)) {
        const element = string[idx];
        console.log(element);
        
    }
}

{
    // FOR OF DOESN'T WORK ON OBJECTS!!!!!!
    // WILL ONLY WORK ON ARRAYS AND STRINGS
    let sanfords = ['Emily', 'Eric', 'Evan', 'Eliot', 'Elizabeth']
    for (const sanford of sanfords) {
        console.log(sanford);
        
        
    }

}

// for in should be your go to because it's easier to understand.
<<<<<<< HEAD

{
    let languages = ["javascript", "python", "c++","c#"];


    let count = 0;
    while (count > 1) { // will not log because it's false
        console.log('Do I work? Yes, I worked');
    }
    let people = 0;
    while (people < 3) { // will not log because it's false
        people++
        console.log('Do I work? Yes, I worked');
    }

    let idx = 0;
    while (idx < 10) {
        idx++;
        console.log(idx);
        
    }
    // let languages = ["javascript", "python", "c++"];
    languages.forEach((languages) => console.log(languages)); // logs each item in array
    languages.forEach((languages, idx) => console.log(languages, idx + 1)); // logs each item in array and the index
    
    for (const language of languages) {
        console.log(language);
        if (language === 'python') { //break must be the last item in the if
            break;
        }
    }
    
    for (const language of languages) {
        if (language === 'python') {
            continue;
        }
        console.log(language); // location of the do stuff matters
    }

    languages.forEach((languages, idx) => console.log(languages, idx + 1)); // you cannot break or continue a forEach Loop

    // javascript is a single-threaded language meaning it can only do one thing at a time.

    let data = [
        [
            ['Elmo', 'Big Bird'],
            ['Dora', 'Diego']],
        [
            ['James Bond', 'Jason Bourne'],
            ['Boba', 'Mando']
        ]
    ]
    for (let i = 0; i < data.length; i++) {
        console.log(i); //each index
        console.log(data[i]); // log each array
        
        
        for (let j = 0; j < data[i].length; j++) {
            const element = data[i][j]; //log each item of an array by itself inside of another array (each array will do this)
            console.log(element);  
            
            for (let k = 0; k < data[j].length; k++) {
                const item = data[i][j][k]; //log each item of an array by itself inside of another array (each array will do this)
                console.log(item);               
            }     
        }        
    }
    console.log('Nested loop is done!');

    let bool = true; 
    while(bool){
    console.log("It's true");
        
        bool=false;
    }


    // vowel and cononant counter

    // how many vowels and consonants and place it in an object. 
    // uppers and lowers

    let string = 'Lorem ipsum dolor sit amet';
    let vowels = 0;
    let consonants = 0;
   
for (let i = 0; i < string.length; i++) {
    const e = string[i];
    if  (e == "a" 
        || e == "e" 
        || e == "i" 
        || e == "o" 
        || e == "u") {
        vowels++;
    } else {
        consonants++;
    }
    
}
console.log(string);

console.log("vowels", vowels);
console.log("consonants", consonants);


{
    let newString = 'Lorem ipsum dolor sit amet';
    let vowelCount = 0;
    let consonantCount = 0;
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (const letter of newString) {
        let found = false;
        for (let i = 0; i < vowels.length; i++) {
            const vowel = vowels[i];
            // debugger
            if (letter == vowel) {
                vowelCount++;
                found = true;
            }
        }
        if (!found) {
            consonantCount++;
        }
    }
    
    console.log(newString);
    console.log('vowels', vowelCount);
    console.log('consonants', consonantCount);
}
    
}

{

    let password="password!";
    let char = ['!', '@', '#', '$', '%', '&'];

    for(let i = 0; i < password.length; i++) {
        const e = password[i];
        if (e == char[0]) {
            console.log(true);
        }
    }
} 

{

    let password="password!";
    let char = ['!', '@', '#', '$', '%', '&'];
    let found = false;

    for (const letter of password) {
        for (const specChar of char) {
            if (letter === specChar)
            found = true;
        }
    }

    if (found) {
        console.log("Your password includes a special character. Great job!");
        
    } else {
        console.log("Your password needs a special character.");
        
    }
} 

{

    let password="password!";
    let char = ['!', '@', '#', '$', '%', '&'];
    let found = '';

    for (const letter of password) {
        for (const specChar of char) {
            if (letter === specChar)
            found = specChar;
        }
    }

    if (found) {
        console.log(`Your password includes a special character. Great job you added a "${found}"!`);
        
    } else {
        console.log("Your password needs a special character.");
        
    }


} 

{
// SOLVE FOR HOW MANY OF EACH DENOMINATION
var dataArray = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime'
];

let denominations = ['dime', 'penny', 'quarter'];
let demCounts = {
    dimeCount: 0,
    nickelCount: 0,
    pennyCount: 0,
    quarterCount: 0
}

for (const dataItem of dataArray) {
    switch (dataItem) {
        case 'dime':
            demCounts.dimeCount++;
            break;
        case 'nickel':
                demCounts.nickelCount++;
                break;
        case 'penny':
            demCounts.pennyCount++;
            break;
        case 'quarter':
            demCounts.quarterCount++;
            break;    
        default:
            console.log("This item doesn't exist in your demCounts obj: " + dataItem);
            break;
    }
 
}

console.log(`You have this many coins: ${demCounts.dimeCount} dimes, ${demCounts.nickelCount} nickels, ${demCounts.pennyCount} pennies, and ${demCounts.quarterCount} quarters.`);

// challenge: how many can fit into a coin roller and how many remain?
// how much money would you have in each denomination and in what dollar amount?

}
=======
>>>>>>> 8369a85... day 7 of ms coding academy objects and for loops
