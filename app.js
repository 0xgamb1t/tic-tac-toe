// player factory
// >name, robot boolean, character [X,O]
const playerFactory = (username) => {
    //person-wrapper
    //input field
    
    
    username;
    console.log('player factory used');
    
    return {
        createWrapper() {
            let playerWrapper = document.createElement('div')
            console.log('div created');
            
            document.body.appendChild(playerWrapper)
            playerWrapper.classList.add('player-wrapper')

            let playerUsername = document.createElement('input')
            playerWrapper.appendChild(playerUsername)
        }
    }
}


const displayController = (() => {
    //game modes - create 2 players, one player / one robot , 2 robots
    if (document.getElementById('two-player').checked) {
        console.log('two players baby!'); 
        const player1 = playerFactory();
        const player2 = playerFactory();
        console.log(player1);
        console.log(player1);
        player1.createWrapper()
        
    }
    

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
    //needs to be a better way for this variable
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
            //column number + unique id per tile
            tile.classList.add(`tile`, `c${index + 1}`)
            tile.setAttribute('id', `t${squareCounter}`)
            squareCounter = squareCounter + 1;
        });
    });

    //if twoplayer is selected create to username:input fields 
    //if human and
})();


const game = (() => {
    const gameSquare = document.querySelectorAll('.tile')

    // based on personFactory player turn
    let currentPlayerCharacter = 'X'
    

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

        if (playerOneTiles.length > 2  || playerTwoTiles.length > 2) {
            console.log('someone could have won by now');
            //see if someone won

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

    function shake () {
        console.log('board shakes!')
    }

    //what happens when clicked
    gameSquare.forEach(square => {
        square.addEventListener('click', () => {
            console.log(`you have just clicked square ${square.id}`);

            //if square is empty apply current player mark
            if (square.textContent == ''){
                //checkPlayerTurn()
                square.textContent = currentPlayerCharacter
                // square.style.backgroundColor = 'blue'      
                // save the current selection to the person who selected it          
                logState(square.id)
                // if more than 2 squares were chosen by one player, start checking if someone won
                checkWinner()
                // move onto next player
                changePlayer()
                //if the second player is a robot play

            } else {
                shake()
            }
        })
        
    });

})();
    






// gameObject
// >determine who is next
// >determine winner
// >determine tie