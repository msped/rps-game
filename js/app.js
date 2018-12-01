let userScore = 0;
let compScore = 0;

const rock = $('#r');
const paper = $('#p');
const scissors = $('#s');
const resetScores = $('#resetScores');

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
    result.text("Woohoo you win!");
}

function lose() {
    compScore++;
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
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }
    
};

function reset() {
    userScore = 0;
    compScore = 0; 
    user_span,text(userScore);
    code_span.text(compScore);
}


$(document).ready( function(){

    rock.on('click touchstart', function() {
        game("r");
    });

    paper.on('click touchstart', function() {
        game("p");
    });

    scissors.on('click touchstart', function() {
        game("s");
    });

    resetScores.on('click touchstart', function() {
        reset();
    });
});