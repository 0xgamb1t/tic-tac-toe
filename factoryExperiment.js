// a factory that accepts two players in a list
// returns a list of new player objects
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
    //reset when clicking the toggle or reset button
    //creates a gameType & playerList
    //updates username when filled in
    //every time the gametype button is clicked, reset with new 4 things
    //manage game type selection
    let playerList;
    

    const gameTypeBtns = document.querySelectorAll('.game-type')
    
    function newGame() {}


    function newGameType() {
            gameTypeBtns.forEach(e => {
                if (e.checked == true) {
                    gameType = e.value.split(' ')
                    playerList = playerFactory(gameType)
                    return playerList
                } else{}
            });
    }newGameType();
    
    // has to be a way to do it similar to this to have recursion 
    // const newPlayerList = (() => {
    //     playerList = playerFactory(gameType)
    // })();

    // function newPlayerList() {
    //     playerList = playerFactory(gameType)
    // } newPlayerList()

    console.log(gameType);
    console.log(playerList);
    

    

    // every time the game type is changed i spit out a new game type to be used in the Ui
    gameTypeBtns.forEach(e => {
        //reset Ui
        e.addEventListener('change', () => {
                        console.log('changed');
                        runNewGameUi();
                        })
        //reset player list every time the button is changed
        
    //     //rerun Ui
    }); 


    console.log(gameType.__proto__);
    
    //convert the string to the two players and create those unique objects

    
    function newPlayerUi() {
        //add players ui
        playerList.forEach(e => {
            let playerWrapper = document.createElement('div')
            document.body.appendChild(playerWrapper)
            playerWrapper.classList.add('player-wrapper')
            //create human ui
            //label + input box + user input
            let playerLabel = document.createElement('label')
            playerWrapper.appendChild(playerLabel)
            playerLabel.setAttribute('for', `${e.playerName}`)
            playerLabel.textContent = 'Username: '

            let playerUsername = document.createElement('input')
            playerWrapper.appendChild(playerUsername)
            //create setAttribute helper
            playerUsername.setAttribute('name',`${e.playerName}`)
            playerUsername.setAttribute('type',`text`)
            playerUsername.setAttribute('id',`${e.playerName}`) // make the index of the game mode the number after person or robot
            playerUsername.setAttribute('placeholder',`${e.playerName}`)
            //create robot ui
        });
    } newPlayerUi() //has to be a way to use es6 to not have this code i think
    
    //run board code together
    function newBoardUi() {
        //delete previous board substitute a new one
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
                console.log(index);
                
                squareCounter = squareCounter + 1;
            });
        });
    }newBoardUi();
    //if twoplayer is selected create to username:input fields 
    //if human and
    
    function runNewGameUi() {
        //delete old
        //deleteUi();
        //create new!
        newGameType();
        newPlayerList();
        newPlayerUi();
        newBoardUi();
        console.log('game started!');
        }
})();


const createGame = (() => {
    //createGame
    //
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
    

// players = playerFactory(meatVMeat)
// player1 = players[0]
// player2= players[1]
// console.log(player1);





