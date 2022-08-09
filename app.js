const displayController = (() => {
    //adding #game-container > .game-board to the body
    const gameContainer = document.createElement('div')
    gameContainer.setAttribute('id', 'game-container')
    document.body.appendChild(gameContainer)

    const gameBoard = document.createElement('div')
    gameBoard.classList.add('game-board')
    gameContainer.appendChild(gameBoard)


    //creating board components
    let board =  [           
                ['', '', ''],    
                ['', '', ''],
                ['', '', '']
            ];

    //creating a board with the amount of rows in the board array
    //needs to be a better way for this
    let squareCounter = 1

    board.forEach((row, index) => {
        const boardRow = document.createElement('div')
        boardRow.classList.add('row', `r${index + 1}`)
        gameBoard.appendChild(boardRow)
        //creating tiles with column indexes for css
        //Theory: it'll be much simpler to style the lines in css
        row.forEach((tile, index) => {
            tile = document.createElement('div')
            boardRow.appendChild(tile)
            //column number
            tile.classList.add(`tile`, `c${index + 1}`)
            tile.setAttribute('id', `t${squareCounter}`)
            squareCounter = squareCounter + 1;
            
            
            
            

        //what needs to be used to determine the next move? 
        //find out how to add emoji here
        

        });
    });

    

    //populate squares
    // board.forEach(e => {
    //     const gameSquare = document.createElement('div')
    //     gameSquare.classList.add(`square`, e)
    //     gameBoard.appendChild(gameSquare)
    // });
        
    //depending on player selection several things are required 
    //2 players > require usernames
    //1 player > require username
})();


const game = (() => {
    const gameSquare = document.querySelectorAll('.tile')

    currentPlayerCharacter = 'X'
    

    //can be a ternary operator
    function changePlayer() {
        if (currentPlayerCharacter == 'X'){
            currentPlayerCharacter = 'O'
        } else {
            currentPlayerCharacter = 'X'
        }
    }

    function checkWinner() {
        //looking to see if the current board matches a winning selection
        winningCombinations = 
        //t for tile #
            [t1, t2, t3],
            [t4, t5, t6],
            [t7, t8, t9],
            [t1, t4, t7],
            [t2, t5, t8],
            [t3, t6, t9],
            [t1, t5, t9],
            [t3, t5, t7]

        if (playerOneTiles.length < 2  || playerTwoTiles.length < 2) {
            //if the permutations of the player tiles makes up a winning combination declare a winner
            //if all 9 tiles have been used and no winner is found there is a tie
        }
    }

    let playerOneTiles = []
    let playerTwoTiles = []

    function logState(t) {
        if (currentPlayerCharacter == 'X') {
            console.log('log to player 1');
            playerOneTiles.push(t)
            console.log(playerOneTiles);
            
        } else {
            console.log('log to player 2');
            playerTwoTiles.push(t)
            console.log(playerTwoTiles);
        }
    }

    //what happens when clicked
    gameSquare.forEach(square => {
        square.addEventListener('click', () => {
            console.log(square);
            
            //when clicked do the following:
            //1)check if the square is free
            //if free > apply current player mark
            //if not free > shake
            //2)see who's turn it is : probably move to 1
            //place the mark of whoevers turn it is

            if (square.textContent == ''){
                //checkPlayerTurn()
                square.textContent = currentPlayerCharacter
                square.style.backgroundColor = 'blue'                
                logState(square.id)
                checkWinner()
                changePlayer()

            } else {
                shake()
            }
        })
        
    });

})();
    

// player factory
// >name, robot boolean, character [X,O]
const playerFactory = (username, playerToggle) => {
    gameType = document.getElementById('playerToggle')
    playerToggle = gameType.value
    
    username;
}



// gameObject
// >determine who is next
// >determine winner
// >determine tie