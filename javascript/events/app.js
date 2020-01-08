// Events p. 245-292 in Duckett
{
    // create a target
    let output = document.getElementById('output');

    // target.addEventListener(event, callback function)
    output.addEventListener('click', function(){
        console.log('it works');
    })

    let list = document.getElementById('list');
    let items = ['Napier','Grantham', 'Judge', 'Shoop', 'Sarkisian'];

    for (const item of items) {
        let el = document.createElement('li');
        el.classList.add('maroon');
        el.innerText = item;
        el.addEventListener('click', function (){ 
            hide(el)
        }); // began with a nameless function instead of hide // function (){ el.style.display = 'none';}
        // removed hide.
        // if you're function needs a parameter in this situation, then you must use an anonymous function
        // if you're just processing it without a param, then use a named function.
        list.appendChild(el);
    }

    // function hide() {
    //     this.style.display = 'none'; //removed this keyword
    // }

    function hide(el) {
        el.style.display = 'none';
    }

    document.addEventListener('scroll', function () {
        console.log('When someone declines the job or is hired elsewhere, then click them on the list.');
    })

    let input = document.getElementById('input');
    input.addEventListener('blur', function (){
        console.log('you clicked away from the input');
    });

    let submit = document.getElementById('submit');
    submit.addEventListener('submit', function () {
        input.value = 
    })

    // what is the event loop
    // we watched https://www.youtube.com/watch?v=cCOL7MC4Pl0
    // what if a single thread blocks things, and we're unable to work
    // javascript is single-threaded. The JS Engine can only process one piece of code at a time.


    /**
     * run in parallel
     * tasks
     * task queue 
     * using setTimeOut is a bad idea for animation
     * animation callbacks
     * requestAnimationFrame
     * queueTask running infinitely
     * microtasks (not promises)
     * mutation events
     * mutation observers
     * 
     */
}