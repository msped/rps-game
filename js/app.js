let userScore = 0;
let compScore = 0;

const rock = $('#r');
const paper = $('#p');
const scissors = $('#s');

const user_span = $('.user-score');
const code_span = $('.computer-score');
const result  = $('#result-text');

function CodeChoice() {
    const choice = ['r', 'p', 's'];
    i = Math.floor(Math.random()*3);
    return choice[i];
}

function win() {
    userScore++;
    user_span.html(userScore);
    console.log(userScore);
    result.text("Woohoo you win!");
}

function lose() {
    compScore++;
    console.log(compScore);
    code_span.text(compScore);
    result.text("Oh no you lose :(");
}

function draw() {
    result.text("Phew, its a draw!");
}

function game(userChoice) {
    
    const compChoice = CodeChoice();
    switch (userChoice + compChoice) {
        case "rs":
        case "pr":
        case "sp":
            console.log('win');
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            console.log('lose');
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log('draw');
            draw();
            break;
    }
    
};

$(document).ready( function(){

    rock.on('click', function() {
        game("r");
    });

    paper.on('click', function() {
        game("p");
    });

    scissors.on('click', function() {
        game("s");
    });
});