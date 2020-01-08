// DOM stands for Document Object Model

/**
 * visual tree representation to work across that DOM.
 * see p. 183-232 Duckett
 */

 let output = document.getElementById('output');

 console.log(output);

 output.innerText = "This is output to the screen!";
// left hand sets value  // right hand is the value of the innerText
// this is DOM manipulation. The source code is not editted, just the visual representation on the browser.
// the string is not actually in the code, but jasvascript visually injects the string in less than a split second.

 let foo = output.innerText;

//  what's foo going to output?

 output.style.color = 'red';

output.classList.add('blue');

let list = document.getElementById('list');
let items = ['bananas', 'apples', 'milk'];
for (const item of items) {
    list.innerHTML+= `<li>${item}</li>`;
};

let overwrite = document.querySelector('#output'); // querySelector uses the css selector. 
// querySelector is really useful because if you're good at using css, then it will give you the route to use that knowledge
// don't need specificity, but you can use specificity if you want.
overwrite.innerHTML = 'This is output, too, but it wrote over your previous text. Oh noooo!!!'

let addNewEl = document.getElementById('new');
let num = 3;

        

let newSection = document.getElementById('new').querySelectorAll('p');

newSection.innerText = 'Yo, you injected this into the p elements. Boom!'

// know how to create a NodeList and HTML Collection
// a NodeList is not an Array, but it is Array like in that you can iterate over it like an array using .forEach or .querySelector

{
    let list = document.getElementById('list');
    let items = ['bananas', 'apples', 'milk'];
    for (const item of items) {
        // list.innerHTML+= `<li>${item}</li>`;
        let el = document.createElement('li');
        el.classList.add('blue');
        el.innerText = item;
        list.appendChild(el);
    };
    
    
}

{
    let game = document.querySelector('#game');

    for (let i = 0; i < 9; i++) {
        let el = document.createElement('div');
        el.classList.add('blue');
        el. setAttribute('data-idx', i);
        game.appendChild(el);
    }

    let tiles = document.querySelectorAll('#game div');

    for (const tile of tiles) {
        console.log(tile.getAttribute('data-idx'));
        
        
    }
}

