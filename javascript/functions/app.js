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
<<<<<<< HEAD
}
{
    // day 2 of functions

    //template literals

    name = 'Eliot'
    console.log(`Hey, my name is ${name}`);

    //FUNCTION EXPRESSIONS
    const speaker = function() { // it's a good idea to use const
        console.log('The speaker has spoken');
        
    }
    
    speaker(); // must be invoked 

    //hoisting 
    hello('Eliot')
    function hello(name) {
        console.log(`Hey, my name is ${name}`);
    }

    // however you cannot hoist function expressions. If speaker is declared before line 126 let speaker... it will error. 

    //OBJECT CONSTRUCTOR METHOD

    function Person(fName, lName, age){
        this.firstName = fName,
        this.lastName = lName,
        this.age = age;
    }
    
    let eliot = new Person('Eliot', 'Sanford', 32);
    let ranjita = new Person('Ranjita', 'Sanford', 30);

    console.log(eliot, ranjita);
    console.log(`Welcome to the Person object constructor method, ${eliot.firstName} and ${ranjita.firstName}`);
    
    // classes in javascript are just object constructor methods and syntactical sugar in javasript

    //review the material in this book.

    //SCOPE

    let place = 'York';
    function namePlace(name) {
        let place = 'Orleans';
        console.log(`${name} ${place}`);
    }

    namePlace('New');

    function scope(param='Hello', param2 = 'World') {
        var newVar = 'hola';
        let newLet = 'mundo';
        const newConst = "!";
        console.log(param, param2);
        
    }
    scope();
    scope('Disney');
    scope('Disney', 'Mundo');
    // console.log(param, param2, newVar, newLet, newConst); // Each of these are function scoped and will not log in the global scope.
    

    function zoo(animals) {
        console.log(animals);
        
    }
    zoo(['Lions', 'Tigers', 'Bears']);

    function farm() {
        console.log(arguments); // arguments value allows you to output an undetermined number of item input parameters
        console.log(arguments[0]); // outputs chickens
    }

    farm("Chickens", "Pig", "Dog", "Cow", "Duck", "Horse");

    function shelf(...args) { // spread operator
        console.log(args);
    }

    shelf('Bible', 'Concordance', 'Commentary');

    function students(){
        console.log([...arguments]); 
    }
    students("Walker", "Wright", "John Michael", "Casidee", "KK");

    // stacks
    // lifo // last in first out
    // last place in is the first out of the stack of plates

    function multipy(a, b) {
        return a * b;
    }

    function square(n) {
        return multipy(n, n);
    }

    function printSquare(n) {
        let result = square(n);
        console.log(result);
    }

    printSquare(9); 
    /** Start with printSquare for result...
         go to square.. 
         go to multiply.. 
         execute the operation of 81, then... 
         return it to square, then...
         return it to printSquare as result...
         log the result of 81
    */

    // QUEUE
    // fifo = first in first out
    // queue is a line
    // queues are much more efficient because people like them better when they get in first and get out first.

    //EXERCISE
    // WRITE A FUNCTIONS THAT DOES SIMPLE MATH
    // ADD, SUBTRACT, DIVIDE, MULTIPLY AND RETURNS...
    // THE RESULT
    // I WOULD LIKE ADD TO BE THE DEFAULT RETURN

    function simpleMath(num1, num2, func = "add") {
        let result;

            if (!num1 || !num2)
                return "Result cannot populate without two numbers input."; // early return helps you avoid running unnecessary lines of code.

            if (func == "divide") {
                result = num1 / num2;
            } else if (func == "multiply") {
                result = num1 * num2;
            } else if (func == "subract") {
                result = num1 - num2;
            } else {
                result = num1 + num2;
            }
        console.log(result);
        
    }

    simpleMath(1, 2);

    




=======
    


>>>>>>> f827c69... day 10 ms coding academy functions with keke
}