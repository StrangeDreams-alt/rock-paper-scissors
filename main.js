// rock paper scissors


function compPlay() {
    //let move = Math.floor(Math.random()*10)
    let move = getRandomInteger(1, 3)
    if (move === 1) {
        return 'rock'
    } else if (move === 2) {
        return 'paper'
    } else if (move === 3 ) {
        return 'scissors'
    }
    else {console.log('unknown error')}
};

function getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
}

let humanPlayer = prompt('Rock, paper or scissors?')

let compPlayMove = compPlay()

if (humanPlayer === 'rock' && compPlayMove === 'scissors') {
    console.log('Computer played ' + compPlayMove + '...YOU WIN!')
} else if (humanPlayer === 'rock' && compPlayMove === 'paper') {
    console.log('Computer played ' + compPlayMove + '...COMPUTER WINS!')
} else if (humanPlayer === 'rock' && compPlayMove === 'rock') {
    console.log('Computer played ' + compPlayMove + '...DRAW!')
} else if (humanPlayer === 'scissors' && compPlayMove === 'paper') {
    console.log('Computer played ' + compPlayMove + '...YOU WIN!')
} else if (humanPlayer === 'scissors' && compPlayMove === 'rock') {
    console.log('Computer played ' + compPlayMove + '...COMPUTER WINS!')
} else if (humanPlayer === 'scissors' && compPlayMove === 'scissors') {
    console.log('Computer played ' + compPlayMove + '...DRAW!')
} else if (humanPlayer === 'paper' && compPlayMove === 'rock') {
    console.log('Computer played ' + compPlayMove + '...YOU WIN!')
} else if (humanPlayer === 'paper' && compPlayMove === 'scissors') {
    console.log('Computer played ' + compPlayMove + '...COMPUTER WINS!')
} else if (humanPlayer === 'paper' && compPlayMove === 'paper') {
    console.log('Computer played ' + compPlayMove + '...DRAW!')
} else {
    console.log('unknown error')
};