// player factory
// >name, robot boolean, character [X,O]
const playerFactory = (name) => {
    //person-wrapper
    //input field
    //takes two inputs in a list and creates wrappers
    
    console.log('player factory used');

    //can use a single return function and forget about 'object'
    //trouble excecuting multiple functions in this factory
       
    const createWrapper = () => {
            let playerWrapper = document.createElement('div')
            console.log('div created');
            
            document.body.appendChild(playerWrapper)
            playerWrapper.classList.add('player-wrapper')

            let playerLabel = document.createElement('label')
            playerWrapper.appendChild(playerLabel)
            playerLabel.setAttribute('for', `${name}`)
            playerLabel.textContent = 'Username: '

            let playerUsername = document.createElement('input')
            playerWrapper.appendChild(playerUsername)
            //create setAttribute helper
            playerUsername.setAttribute('name',`${name}`)
            playerUsername.setAttribute('type',`text`)
            playerUsername.setAttribute('id',`${name}`) // make the index of the game mode the number after person or robot
            playerUsername.setAttribute('placeholder',`${name}`)
            
            console.log(`hello i am ${name}`);   

        }
    

    const speak = () => {
        console.log('hi');
    }

    //multiple return functions are not allowed as it ends the program lol...
    return {createWrapper, speak}  
}


const displayController = (() => {
    //game modes - create 2 players, one player / one robot , 2 robots
    // gameOption1 = [human,human]
    // gameOption2 = [human,robot]
    // gameOption3 = [robot,robot]

    //take the mode and run it through the factory
    
    if (document.getElementById('two-player').checked) {


        //
        console.log('two players baby!'); 
        const player1 = playerFactory('gambino');
        const player2 = playerFactory('gambino2');
        console.log(player1.name);
        console.log(player2);
        player1.createWrapper()
        player2.createWrapper()

        
        
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
    //change character to player > mark
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