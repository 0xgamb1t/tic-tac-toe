// player factory
// >name, robot boolean, character [X,O]

let meatVMeat = ['human', 'human']
let meatVMetal = ['human', 'robot']
let metalVMetal = ['robot', 'robot']

// a factory that accepts two players in a list
function playerFactory(players) {
    players.forEach((e,v) => {
        //if they are human create an human object
        if (e == 'human'){

        }

        //otherwise create a robot object

        userName = `${e}${v}`;
        userTiles = [];
        

        //first player has the first turn
        isTurn = Boolean;

        

        //this seems like how i should have done it to start imco.
        if (e == 'human') {
            let humanObject = {
                userName,
                userTiles : [],
                userMark,
                isTurn : ((v == 0) ? true : false), // player 0 always goes first for simplicity xD
                //make a function that adds a tile to this users collection
                addTiles() {},
                //create a function that changes the username when writing make it look like you edit the page on the fly?
                changeUsername() {},
                //create a function to congratulate winner?

            }
            //add to the tiles
            

            //create a human ui
            //condense this code
            let playerWrapper = document.createElement('div');
            document.body.appendChild(playerWrapper);
            playerWrapper.classList.add('player-wrapper', `player${v}-wrapper`);

            let playerLabel = document.createElement('label');
            playerWrapper.appendChild(playerLabel);
            playerLabel.setAttribute('for', `${e}`);
            playerLabel.textContent = 'User Name: ';

            //apply the index of the list
            let playerInput = document.createElement('input');
            playerWrapper.appendChild(playerInput);
            playerInput.classList.add('playerInput');
            playerInput.setAttribute('id', `playerInput${v}`);

            playerInput.setAttribute('name', `player${v}`);
            playerInput.setAttribute('type', `text`);
            playerInput.setAttribute('placeholder', `player${v}`);

            //give it an array to record selections
        } else {
            //create robot ui and later robot intelligence levels
            //condense this code
            let robotWrapper = document.createElement('div');
            document.body.appendChild(robotWrapper);
            robotWrapper.classList.add('robot-wrapper', `robot${v}-wrapper`);

            let playerLabel = document.createElement('label');
            robotWrapper.appendChild(playerLabel);
            playerLabel.setAttribute('for', `${e}`);
            playerLabel.textContent = 'Robot Name: ';


            let robotInput = document.createElement('input');
            robotWrapper.appendChild(robotInput);
            robotInput.classList.add('robotInput');
            robotInput.setAttribute('id', `robotInput${v}`);

            robotInput.setAttribute('name', `robot${v}`);
            robotInput.setAttribute('type', `text`);
            robotInput.setAttribute('placeholder', `robot${v}`);
            //give it an array to record selections

        }
    });
    console.log(userName);
    return userName;
    
    
}

// playerFactory(meatVMeat)

// gameType = document.getElementsByName('game-type')

// gameType.forEach(e => {
//     if (e.checked == true) {
//         console.log(e.value);   
//     }
// });


const displayController = (() => {
    // gameOption1 = [human,human]
    // gameOption2 = [human,robot]
    // gameOption3 = [robot,robot]

    //take the mode and run it through the factory
    gameType = document.getElementsByName('game-type')

    gameType.forEach(e => {
        if (e.checked == true) {
            console.log(e.value);
            console.log(['human','human']);
            console.log(e.value == ['human','human']);
            playerFactory(['human','human'])
            //playerFactory[e.value] should work? maybe it's a node list
        }
    });
    

    //work on radio button change

    //if (document.getElementById('two-player').checked) {
    

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