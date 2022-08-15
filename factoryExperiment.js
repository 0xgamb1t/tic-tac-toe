// a factory that accepts two players in a list
// returns a list of new player objects
const gameTypeBtns = document.querySelectorAll('.game-type')
const resetBtn = document.querySelector('.reset-button')

function playerFactory(gameTypeList) {
    let player1;
    let player2;

    gameTypeList.forEach((e,v) => {
        //this seems like how i should have done it to start imco.
        //if human create a human object > else robot
        const playerObject = {
            playerName : `${e+v}`,
            playerType : ((e == 'human' ? 'human' : 'robot')),
            tileBag : [],
            userMark : ((v == 0 ? 'X' : '0')),
            isTurn : ((v == 0) ? true : false), // player 0 [on the left] always goes first for simplicity xD
            placeTiles() {},
            addTilesToBad(tile) {
                this.tileBag.push(tile)
                console.log(this.tileBag)
            },
            changeUsername() {},
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

const newGame = (() => {
let player1;
let player2;

    function getPlayerList() {
            gameTypeBtns.forEach(e => {
                if (e.checked == true) {
                    playerList = playerFactory(e.value.split(' '))
                    playerList.forEach((e,v) => {
                        (v = 0? player1 = e: player2 = e)
                    });
                    return playerList
                } else{}
            });
    }getPlayerList();

    console.log(`current players ${player1}`);
    
    //listen to see if
    //1. game type is changed
    //2. reset button is clicked        
    gameTypeBtns.forEach(e => {
        //reset Ui
        e.addEventListener('change', () => {
            console.log('game mode changed');
            displayController.runNewGameUi();
            //gameController.runNewGame();
        })
    });
    
    resetBtn.addEventListener('click', () => {
        console.log('game reset');
        displayController.runNewGameUi();
        //gameController.runNewGame();
    })
})();


const displayController = (() => {
    //reset when clicking the toggle or reset button
    //creates a gameType & playerList
    //updates username when filled in
    //every time the gametype button is clicked, reset with new 4 things
    //manage game type selection
    let playerList;
    

    function getPlayerList() {
            gameTypeBtns.forEach(e => {
                if (e.checked == true) {
                    gameType = e.value.split(' ')
                    playerList = playerFactory(gameType)
                    console.log(playerList);
                    return playerList
                } else{}
            });
    }getPlayerList();
    console.log(playerList);


    //convert the string to the two players and create those unique objects
    function newPlayerUi() {
        //remove all ui with a 'removable' class
        document.querySelectorAll('.removable').forEach(e => {
            e.remove()
        });
        
        //adds new ui
        playerList.forEach(e => {
            let playerWrapper = document.body.appendChild(document.createElement('div'))
            playerWrapper.classList.add('player-wrapper', 'removable')
            //create human ui
            //label + input box + user input
            let playerLabel = playerWrapper.appendChild(document.createElement('label'))
            playerLabel.setAttribute('for', `${e.playerName}`)
            playerLabel.textContent = 'Username: '

            let playerUsername = playerWrapper.appendChild(document.createElement('input'))
            //create setAttribute helper
            playerUsername.setAttribute('name',`${e.playerName}`)
            playerUsername.setAttribute('type',`text`)
            playerUsername.setAttribute('id',`${e.playerName}`) // make the index of the game mode the number after person or robot
            playerUsername.setAttribute('placeholder',`${e.playerName}`)
            //create robot ui
        });
    } newPlayerUi() //has to be a way to use es6 to not have this code i think
    
    //creating board UI
    function newBoardUi() {
        //delete previous board substitute a new one
        //adding #game-container > .game-board to the body
        const gameContainer = document.body.appendChild(document.createElement('div'))
        gameContainer.classList.add('game-container', 'removable')
        

        const gameBoard = gameContainer.appendChild(document.createElement('div'))
        gameBoard.classList.add('game-board')
        
        //creating components | board | rows | tiles
        let board =  [           
                    ['', '', ''],    
                    ['', '', ''],
                    ['', '', '']
                ];

        //fix this 
        let squareCounter = 1

        //creating 9 unique tiles from the board array[array] t1-t9
        board.forEach((row, index) => {
            const boardRow = gameBoard.appendChild(document.createElement('div'))
            boardRow.classList.add('row', `r${index + 1}`)
            //Theory: it'll be much simpler to style the lines in css
            row.forEach((tile, index) => {
                tile = boardRow.appendChild(document.createElement('div'))
                tile.classList.add(`tile`, `c${index + 1}`)
                tile.setAttribute('id', `t${squareCounter}`)
                squareCounter += 1;
            });
        });
    }newBoardUi();
    
    const runNewGameUi = (() => {
        getPlayerList();
        newPlayerUi();
        newBoardUi();
        console.log('new game started!');
    })

    return{getPlayerList, runNewGameUi}
})();


//game functionality
const gameController = (() => {
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
            //if the permutations of the player tiles makes up a winning combination declare a winner
            //if all 9 tiles have been used and no winner is found there is a tie
        }
    }

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


    

    
    


    

    

// players = playerFactory(meatVMeat)
// player1 = players[0]
// player2= players[1]
// console.log(player1);






