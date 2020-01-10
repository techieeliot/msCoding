let game = document.querySelector('#output');
let turn = 'X'
let grid = [0,0,0,
            0,0,0,
            0,0,0];
let gameOver = document.getElementById('game-over');

for (let i = 0; i < 9; i++) {
    let el = document.createElement('div');
    el.setAttribute('data-idx', i);
    // click listener
    el.addEventListener('click', function addSymbol () {
        if(el.innerText == '') {
            if(turn == 'X'){
            el.innerText = turn;
            let box = el.getAttribute('data-idx');
            grid[box] = turn;
            turn = 'O';
        } else {
            el.innerText = turn;
            let box = el.getAttribute('data-idx');
            grid[box] = turn;
            turn = "X";
            }
        }
        // create a checkWin function to check true or false
        // if their's a win scneario (true), then output who has won.
        // return true, then at the end return false.
        // if no one wins, then return tie.
        if (grid[0] == grid[3] && grid[3] == grid[6] && grid[0] != 0 && grid[3] != 0 && grid[6] != 0) {
            if(turn != 'X') {
                gameOver.innerText = `Team X wins!`;
            } else {
                gameOver.innerText = `Team O wins!`;
            }
            // if you have a winner, then you need to remove the event handler. 
            // set gameOver to true or false.
        }
    })
    game.appendChild(el);
}