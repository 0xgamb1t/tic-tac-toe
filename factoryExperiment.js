// player factory
// >name, robot boolean, character [X,O]

let meatVMeat = ['human', 'human']
let meatVMetal = ['human', 'robot']
let metalVMetal = ['robot', 'robot']



// a factory that accepts two players in a list
// returns a list of objects
function playerFactory(players) {
    let player1;
    let player2;

    players.forEach((e,v) => {
        //this seems like how i should have done it to start imco.
        //if human create a human object > else robot
        const playerObject = {
            playerName : `${e+v}`,
            playerType : ((e == 'human' ? 'human' : 'robot')),
            tileBag : [],
            userMark : ((v == 0 ? 'X' : '0')),
            isTurn : ((v == 0) ? true : false), // player 0 [on the left] always goes first for simplicity xD
            //game lets user > place tiiles, collect tiles, change name, change difficulty
            placeTiles() {},
            //make a function that adds a tile to this users collection
            addTilesToBad(tile) {
                this.tileBag.push(tile)
                console.log(this.tileBag)
            },
            //create a function that changes the username when writing make it look like you edit the page on the fly?
            changeUsername() {},
            //change turn
            changeTurn() {}  
        }
        //saving the object to one of the two variables
        v == 0? player1 = playerObject: player2 = playerObject;
    })

    //returns an objects of the 2 objects that will be playing , javascript can't return multiple variables at a time
    // players = {'player1' : player1, 'player2' : player2}

    players = [player1, player2]
    return players
}


const displayController = (() => {
    //every time the gametype button is changed the player list needs to update
    let gameType;

    const gameTypeBtns = document.querySelectorAll('.game-type')
    
    gameTypeBtns.forEach(e => {
        if (e.checked == true) {
            return gameType = e.value
        } else {}
    });

    console.log(gameType.__proto__);
    playerList = gameType.split(' ')
    //convert the string to the two players and create those unique objects
    console.log(playerList);
    
    playerFactory(playerList)


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

    winningCombinations = [
            [t1, t2, t3],
            [t4, t5, t6],
            [t7, t8, t9],
            [t1, t4, t7],
            [t2, t5, t8],
            [t3, t6, t9],
            [t1, t5, t9],
            [t3, t5, t7]]
    // based on personFactory player turn
    //for up to 9 turns play the game

    function checkWinner() {
        //looking to see if the current board matches a winning selection
        

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
    

players = playerFactory(meatVMeat)
player1 = players[0]
player2= players[1]
console.log(player1);





