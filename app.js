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
            tile.classList.add('tile', `c${index + 1}`)

        //what needs to be used to determine the next move? 
        //find out how to add emoji here
        row.addEventListener('click', () => {
            //checks who's turn it is
            //sees if that button is available
            //
        })

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
    const gameSquare = document.querySelectorAll('.square')

    currentPlayerCharacter = 'X'
    //board indexes
    //winning conditions

    //can be a ternary operator
    function changePlayer() {
        if (currentPlayerCharacter == 'X'){
            currentPlayerCharacter = 'O'
        } else {
            currentPlayerCharacter = 'X'
        }
    }

    //what happens when clicked
    gameSquare.forEach(square => {
        square.addEventListener('click', () => {
            if (square.textContent == ''){
                //checkPlayerTurn()
                square.textContent = currentPlayerCharacter
                square.style.backgroundColor = 'blue'
                changePlayer()
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