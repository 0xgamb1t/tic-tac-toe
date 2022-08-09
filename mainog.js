const Gameboard = (() => {
    const gameboard = document.getElementById('gameboard')
    console.log(gameboard);
    
    // t = top, m = mid, b = bottom, l = left, c = center, r = right
    let board = ['tl', 'tc', 'tr',
                 'ml', 'mc', 'mr',
                 'bl', 'bc', 'br', 'sd']

    board.forEach(e => {
        let gameSquare = document.createElement('div')
        gameboard.appendChild(gameSquare)
        console.log('printing square'); 
        gameSquare.classList.add(e);
        gameSquare.textContent = 'X';


        gameSquare.addEventListener('click', () => {
            if (gameSquare.textContent = '') {
                console.log(`clicked ${gameSquare.className}`);
                gameSquare.textContent = 'clicked'
            } else {
                gameSquare.textContent = 'Already been clicked'
                console.log(`clicked ${gameSquare.className}`);
            }
            
            // gameSquare.removeEventListener('click', () => {});
        })
    });
})();


const Game = (() => {
    const startBtn = document.getElementById('startBtn')

    let win = () => {
        winningCombinations = [tl, tc, tr],
                              [ml, mc, mr],
                              [bl, bc, br],
                              [tl, mc, br],
                              [bl, mc, tr],
                              [tl, ml, bl],
                              [tc, mc, bc],
                              [tr, mr, br]

        
        if (playerCombinations in winningCombinations){
            //stop the game
            //winner announcement

        }
    }
})();

const PlayerFactory = name => {
    return {name}
}

player1 = document.getElementById('player1')

PlayerFactory(player1.textContent)
PlayerFactory(document.getElementById('player2'))

console.log(player1);


