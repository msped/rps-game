let userScore = 0;
let compScore = 0;
let streakScore = 0;

const rock = $('#r');
const paper = $('#p');
const scissors = $('#s');
const resetScores = $('#resetScores');
const streak = $('#streak-score');
const user_span = $('.user-score');
const code_span = $('.computer-score');
const result  = $('#result-text');
const user_div = $('.user-game > span');
const comp_div = $('.comp-game > span');
const game_result = $('.game-result');

function CodeChoice() {
    const choice = ['r', 'p', 's'];
    i = Math.floor(Math.random()*3);
    return choice[i];
}

function win() {
    userScore++;
    user_span.text(userScore);
    result.text("Woohoo you win!");
    streakScore++;
    streak.text(streakScore);
}

function lose() {
    compScore++;
    code_span.text(compScore);
    result.text("Oh no you lose :(");
    streakScore = 0;
    streak.text(streakScore);
}

function draw() {
    result.text("Phew, its a draw!");
}

function game(userChoice) {
    const rock = "fas fa-hand-rock";
    const paper = "fas fa-hand-paper";
    const scissors = "fas fa-hand-scissors"; 
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
    user_div.removeClass();
    comp_div.removeClass();
    switch (userChoice) {
        case "r":
            user_div.addClass(rock);
            break;
        case "p":
            user_div.addClass(paper);
            break;
        case "s":
            user_div.addClass(scissors);
            break;
    }
    switch (compChoice) {
        case "r":
            comp_div.addClass(rock);
            break;
        case "p":
            comp_div.addClass(paper);
            break;
        case "s":
            comp_div.addClass(scissors);
            break;
    }
    game_result.removeClass('display');
};

function reset() {
    userScore = 0;
    compScore = 0; 
    user_span.text(userScore);
    code_span.text(compScore);
    result.text('Play to win, Nothing.');
    streakScore = 0;
    streak.text(streakScore);
    user_div.removeClass();
    comp_div.removeClass();
    game_result.addClass('display');
}


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

    resetScores.on('click', function() {
        reset();
    });
});
