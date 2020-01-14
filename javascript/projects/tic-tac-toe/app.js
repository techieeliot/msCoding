const INPUT_X = 'X';
const INPUT_O = 'O';
const WINNING_COMBOS = [
    [0,1,2], 
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
]
let count = 0;
let game = document.querySelector('#output');
let turn = INPUT_X;
let grid = [NaN,NaN,NaN,
            NaN,NaN,NaN,
            NaN,NaN,NaN];
let cellElements = document.querySelectorAll('data-idx');
let gameOverMessage = document.getElementById('gameOverMessage');
let gameOver = false;

for (let i = 0; i < 9; i++) {
    let el = document.createElement('div');
    el.setAttribute('data-idx', i);
    el.classList.add('x')
    el.classList.add('o')
    // click listener
    el.addEventListener('click', function addSymbol () {
        if(el.innerText == '') {
            if(turn == INPUT_X){
            el.innerText = turn;
            let box = el.getAttribute('data-idx');
            grid[box] = turn;
            turn = INPUT_O;
            count++;
        } else {
            el.innerText = turn;
            let box = el.getAttribute('data-idx');
            grid[box] = turn;
            turn = INPUT_X;
            count++;
            }
        }
        // create a checkWin function to check true or false
        // if their's a win scneario (true), then output who has won.
        // return true, then at the end return false.
        // if no one wins, then return tie.

        // [0,1,2] top row
        if (grid[0] == grid[1] && grid[1] == grid[2] && grid[0] != 0 && grid[1] != 0 && grid[2] != 0) {
            if(turn != INPUT_X) {
                gameOverMessage.innerText = `Team X wins!`;
                gameOver = true;
            } else {
                gameOverMessage.innerText = `Team O wins!`;
                gameOver = true;

            }
        };
        // [3,4,5] 2nd row
        if (grid[3] == grid[4] && grid[4] == grid[5] && grid[3] != 0 && grid[4] != 0 && grid[5] != 0) {
            if(turn != INPUT_X) {
                gameOverMessage.innerText = `Team X wins!`;
            } else {
                gameOverMessage.innerText = `Team O wins!`;
            }
            gameOver = true;

        };
        // [6,7,8] last row
        if (grid[6] == grid[7] && grid[7] == grid[8] && grid[8] != 0 && grid[7] != 0 && grid[8] != 0) {
            if(turn != INPUT_X) {
                gameOverMessage.innerText = `Team X wins!`;
            } else {
                gameOverMessage.innerText = `Team O wins!`;
            }
            gameOver = true;

        };

        // [0,3,6] first column
        if (grid[0] == grid[3] && grid[3] == grid[6] && grid[0] != 0 && grid[3] != 0 && grid[6] != 0) {
            if(turn != INPUT_X) {
                gameOverMessage.innerText = `Team X wins!`;
            } else {
                gameOverMessage.innerText = `Team O wins!`;
            }
            gameOver = true;

        };
        // [1,4,7] middle column
        if (grid[1] == grid[4] && grid[4] == grid[7] && grid[1] != 0 && grid[4] != 0 && grid[7] != 0) {
            if(turn != INPUT_X) {
                gameOverMessage.innerText = `Team X wins!`;
            } else {
                gameOverMessage.innerText = `Team O wins!`;
            }
            gameOver = true;

        };
        // [2,5,8] last column
        if (grid[2] == grid[5] && grid[5] == grid[8] && grid[2] != 0 && grid[5] != 0 && grid[8] != 0) {
            if(turn != INPUT_X) {
                gameOverMessage.innerText = `Team X wins!`;
            } else {
                gameOverMessage.innerText = `Team O wins!`;
            }
            gameOver = true;

        };
        // [2,4,6] diagonal
        if (grid[2] == grid[4] && grid[4] == grid[6] && grid[2] != 0 && grid[4] != 0 && grid[6] != 0) {
            if(turn != INPUT_X) {
                gameOverMessage.innerText = `Team X wins!`;
            } else {
                gameOverMessage.innerText = `Team O wins!`;
            }
            gameOver = true;

        };
        // [0,4,8] diagonal
        if (grid[0] == grid[4] && grid[4] == grid[8] && grid[0] != 0 && grid[4] != 0 && grid[8] != 0) {
            if(turn != INPUT_X) {
                gameOverMessage.innerText = `Team X wins!`;
            } else {
                gameOverMessage.innerText = `Team O wins!`;
            }
            gameOver = true;

            // if you have a winner, then you need to remove the event handler. 
            // set gameOverMessage to true or false.
        }

        // if (gameOverMessage.innerText != '') {
        //     cellElements.removeEventListener('click', addSymbol)
        // }
        // if (checkWin(turn)){
        //   console.log(`winner`)
        // }

        if (count == 9 && gameOver == false){
            gameOverMessage.innerText = `It's a tie!`
        }

    })

    // function checkWin(turn) {
    //     return WINNING_COMBOS.some(grid => {
    //         return grid.every(index => {
    //             console.log(cellElements[index].innerText);
    //         })
    //     })
    

    game.appendChild(el);
};
