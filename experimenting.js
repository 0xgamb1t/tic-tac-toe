// player factory
// >name, robot boolean, character [X,O]
let meatVmeat = [human, human]
let meatVMetal = [human, robot]
let metalVmetal = [robot, robot]



const playerFactory = ([gameType]) => {
    gameType.forEach(e => {
        if (e == human) {
            //create a human ui
            let playerWrapper = document.createElement('div')
            console.log('div created');
            
            document.body.appendChild(playerWrapper)
            playerWrapper.classList.add('player-wrapper')

            let playerLabel = document.createElement('label')
            playerWrapper.appendChild(playerLabel)
            playerLabel.setAttribute('for', `${e}`)
            playerLabel.textContent = 'Username: '
            //apply the index of the list
        } else {
            //create robot ui and later robot intelligence levels
        }
    }
});

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