//default operator
let score = JSON.parse(localStorage.getItem('score')) || {  //this will pull data out of local storage if available
            
    wins: 0,
    losses: 0,
    ties: 0
    
} ;

updateScoreElement();

//checks if score is null and if it is, then set default value
//we dont need to use this because we are using the default operator above

// if (!score){
//     const score = {
//         wins: 0,
//         losses: 0,
//         ties: 0
//     }
// }


function resetScore() {
    score.wins = 0;
    score.losses = 0;
    score.ties = 0;

    //shows how to remove the score variable from storage
    localStorage.removeItem('score');
    updateScoreElement();
}

//select the icon used by move
function iconSelector(move){
    let icon = '';
    if (move === 'scissors'){
        icon = '<i class="fa-regular fa-hand-scissors"></i>';
    }
    else if (move === 'paper'){
        icon = '<i class="fa-regular fa-hand"></i>'
    }
    else if (move === 'rock'){
        icon = '<i class="fa-regular fa-hand-back-fist"></i>'
    }

    return icon;
}

function playGame(playerMove){
    const computerMove = pickComputerMove();

    let result = '';

    //finds the associated icon for each move
    let playerIcon =  iconSelector(playerMove);
    let computerIcon = iconSelector(computerMove);


    if (playerMove === 'scissors'){
        if(computerMove === 'scissors'){
            result = 'Tie.';
            ++score.ties;
        }
        else if (computerMove == 'rock'){
            result = 'You lose.';
            ++score.losses;
        }
        else{
             result = 'You win.'
             ++score.wins;
        }
    }
    else if (playerMove === 'paper'){
        if(computerMove === 'paper'){
            result = 'Tie.';
            ++score.ties;
        }
        else if (computerMove == 'scissors'){
            result = 'You lose.';
            ++score.losses;
        }
        else{
             result = 'You win.'
             ++score.wins;
        }
    }
    else if (playerMove === 'rock'){
        if(computerMove === 'rock'){
            result = 'Tie.';
            ++score.ties;
        }
        else if (computerMove == 'paper'){
            result = 'You lose.';
            ++score.losses;
        }
        else{
            result = 'You win.'
            ++score.wins;
        }
    }

    //store score in local storage
    localStorage.setItem('score', JSON.stringify(score));

    // updates the score on the page
    updateScoreElement();

    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You ${playerIcon} - ${computerIcon} Computer`;
    //alert('You picked ' + playerMove +'. Computer picked ' + computerMove + '. ' + result + '\nWins: ' + score.wins + ', Losses: ' + score.losses + ', Ties: ' + score.ties )
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses:  ${score.losses}, Ties:  ${score.ties} `;
}
function pickComputerMove(){
    const randomNumber = Math.random();

    if (randomNumber>= 0 && randomNumber < 1/3){
        computerMove = 'rock';
    } else if (randomNumber >= 1/3 && randomNumber < 2/3){
        computerMove = 'paper';
    } else if (randomNumber >= 2/3 && randomNumber < 1){
        computerMove = 'scissors';
    }
    return computerMove;
}