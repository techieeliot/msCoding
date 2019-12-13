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
