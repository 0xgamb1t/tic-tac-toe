// player factory
// >name, robot boolean, character [X,O]

let meatVmeat = [human, human]
let meatVMetal = [human, robot]
let metalVmetal = [robot, robot]



const playerFactory = ([gameType]) => {
    gameType.forEach((e,v) => {
        if (e == human) {
            //create a human ui
            //condense this code
            let playerWrapper = document.createElement('div')
            document.body.appendChild(playerWrapper)
            playerWrapper.classList.add('player-wrapper', `player${v}-wrapper`)

            let playerLabel = document.createElement('label')
            playerWrapper.appendChild(playerLabel)
            playerLabel.setAttribute('for', `${e}`)
            playerLabel.textContent = 'Username: '
            
            //apply the index of the list

            let playerInput = document.createElement('input')
            playerWrapper.appendChild(playerInput)
            playerInput.classList.add('playerInput')
            playerInput.setAttribute('id', `playerInput${v}`)

            playerInput.setAttribute('name',`player${v}`)
            playerInput.setAttribute('type',`text`)
            playerInput.setAttribute('placeholder',`player${v}`)

            //give it an array to record selections

        } else {
            //create robot ui and later robot intelligence levels
            //condense this code

            let robotWrapper = document.createElement('div')
            document.body.appendChild(robotWrapper)
            robotWrapper.classList.add('robot-wrapper', `robot${v}-wrapper`)

            let playerLabel = document.createElement('label')
            playerWrapper.appendChild(playerLabel)
            playerLabel.setAttribute('for', `${e}`)
            playerLabel.textContent = 'RoboName: '
            

            let robotInput = document.createElement('input')
            playerWrapper.appendChild(robotInput)
            robotInput.classList.add('robotInput')
            robotInput.setAttribute('id', `robotInput${v}`)

            robotInput.setAttribute('name',`robot${v}`)
            robotInput.setAttribute('type',`text`)
            robotInput.setAttribute('placeholder',`robot${v}`)
            //give it an array to record selections


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