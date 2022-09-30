//RPS = Rock Paper Scissors
//Hiding these to set up the show
$("h2").hide();
$(".game").hide();
$(".play-btn").hide();

//Initialising variables
var rock = 1, paper = 2, scissors = 3;

//Creating random no. generator for computer choice
var computerChoice = Math.floor(Math.random()*3 + 1);

//To show the computer choice of RPS
shoot("computer", computerChoice);

//initialize playerChoice variable
var playerChoice = 0;

//On click functions
$(".rock").on("click", function(){
    playerChoice = rock;
    play();
});

$(".paper").on("click", function(){
    playerChoice = paper;
    play();
});

$(".scissors").on("click", function(){
    playerChoice = scissors;
    play();
});

//One keypress functions
$(document).on("keypress", function(event){
    switch (event.key) {
        case 'r':
            playerChoice = rock;
            play();
            break;
    
        case 'p':
            playerChoice = paper;
            play();
            break;

        case 's':
            playerChoice = scissors;
            play();
            break;
        
        default:
            break;
    }
});

//Code for reloading on a button click 
//() => {} can be used in place of function(){}
//Reload button for playing again
$(".play-btn").on("click", () => {
    location.reload();
    return false;
});

//All the functions down here

//hiding and showing stuff and declaring a winner function
function play() {
    shoot("player", playerChoice);
    $(".game").show();
    $(".user").hide();
    winner(computerChoice,playerChoice);
    $(".play-btn").show();
}

//to showing which choice the players(computer, human) chose
function shoot(type, choice) {
    switch (choice) {
        case rock:
            $("." + type).html('<i class="fa-solid fa-hand-back-fist"></i><h3>ROCK</h3>');
            $("." + type + " i").css("color", "#533483");
            break;
    
        case scissors:
            $("." + type).html('<i class="fa-solid fa-hand-scissors"></i><h3>SCISSORS</h3>');
            $("." + type + " i").css("color", "#533483");
            break;
    
        case paper:
            $("." + type).html('<i class="fa-solid fa-hand"></i><h3>PAPER</h3>');
            $("." + type + " i").css("color", "#533483");
            break;
    
        default:
            break;
    }
}

//Declaring the results function
function win(){
    $(".result").text("YOU WIN.");
    $(".result").css("color", "#42855B");
    $(".result").show();
}

function lost(){
    $(".result").text("YOU LOST.");
    $(".result").css("color", "#E94560");
    $(".result").show();
}

function draw(){
    $(".result").text("DRAW.");
    $(".result").css("color", "#FF9551");
    $(".result").show();
}

//function to find out who wins
function winner(computerChoice, playerChoice) {
    if(computerChoice === 1 && playerChoice === 3){
        lost();
    } else if(computerChoice === 3 && playerChoice === 1){
        win();
    } else if(computerChoice > playerChoice){
        lost();
    } else if(playerChoice > computerChoice) {
        win();
    } else if(playerChoice === computerChoice){
        draw();
    }
}

