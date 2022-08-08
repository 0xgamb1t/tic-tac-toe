const gameScreen = (() => {
    const gameContainer = document.createElement('div')
    gameContainer.setAttribute('id', 'game-container')
    document.body.appendChild(gameContainer)

    const gameBoard = document.createElement('div')
    gameBoard.classList.add('game-board')
    gameContainer.appendChild(gameBoard)

    board = []

    for (let i = 0; i < 9; i++){
        square = document.createElement('div')
        square.classList.add(`square`,`${i + 1}`)
        gameBoard.appendChild(square)
    }
    

    const boardSquares = document.querySelectorAll('.square')

    boardSquares.forEach(e => {
        e.textContent = 'square'
        e.addEventListener('click', () => {
            //display players character
            //see if someone won or the game is over
            //change player
            e.textContent = 'clicked'
            e.style.backgroundColor = 'blue'
        })
    });
    
})();


// player factory
// >name, robot boolean, character [X,O]
const playerFactory = (username, playerToggle) => {
    playerToggle = document.getElementById('playerToggle')
    username;
}


// gameObject
// >determine who is next
// >determine winner
// >determine tie