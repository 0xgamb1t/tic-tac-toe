const Gameboard = (() => {
    const gameboard = document.getElementById('gameboard')
    console.log(gameboard);
    
    // t = top, m = mid, b = bottom, l = left, c = center, r = right
    let board = ['tl', 'tc', 'tr',
                 'ml', 'mc', 'mr',
                 'bl', 'bc', 'br']

    board.forEach(e => {
        let gameSquare = document.createElement('div')
        gameboard.appendChild(gameSquare)
        console.log('printing square'); 
        gameSquare.classList.add(e);
        gameSquare.textContent = 'X';


        gameSquare.addEventListener('click', () => {
            console.log(`clicked ${gameSquare.className}`);
            gameSquare.textContent = 'clicked'
            // gameSquare.removeEventListener('click', () => {});
        })
    });
})();


const Game = (() => {
    
})

const Players = ((name, ai) => {
    
})

