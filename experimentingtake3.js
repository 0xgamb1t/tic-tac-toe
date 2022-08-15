// a factory that accepts two players in a list
// returns a list of new player objects
const gameTypeBtns = document.querySelectorAll('.game-type')
const resetBtn = document.querySelector('.reset-button')

//here you can find the parameters needed to start a new game
const createPlayers = (() => {
    let player1;
    let player2;
    
    //find current player list
    gameTypeBtns.forEach((e,v) => {
        if (e.checked) {
            let playerList = e.value.split(' ')
            
            playerListFactory(playerList)

        }
    });

    console.log(player1);
    console.log(player2);
    
    return {player1, player2}
    //create two objects
})();




