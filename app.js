let userScore=0;
let computerScore=0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice()
{
   const choices = ['r','p','s'];
   const randonNumber = Math.floor(Math.random()*3);
   return choices[randonNumber];
}

function convertToWord(letter)
{
    if(letter==="r") return "Rock";
    if(letter==="p") return "Paper";
    return "Sccicors";
}

function win(userC,computerC)
{
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
const userChoice_div = document.getElementById (userC);
userScore++;
userScore_span.innerHTML = userScore;
computerScore_span.innerHTML = computerScore;
result_p.innerHTML = `${convertToWord(userC)}${smallUserWord}beats ${convertToWord(computerC)}${smallCompWord}. You win!🔥`;
userChoice_div.classList.add('green-glow');
setTimeout(function(){ userChoice_div.classList.remove('green-glow')},1000);
}
function lose(userC,computerC)
{   const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userC);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userC)}${smallUserWord}loses ${convertToWord(computerC)}${smallCompWord}.You lost 💩`;    
    userChoice_div.classList.add('red-glow');
    setTimeout(function(){ userChoice_div.classList.remove('red-glow')},1000);
}
function draw(userC,computerC)
{
const userChoice_div = document.getElementById(userC);
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();
result_p.innerHTML = `${convertToWord(userC)}${smallUserWord} ${convertToWord(computerC)}${smallCompWord}.It's draw 😆`;
    userChoice_div.classList.add('grey-glow');
    setTimeout(function(){ userChoice_div.classList.remove('grey-glow')},1000);

}

function game(userChoice)
{
    const  computerChoice = getComputerChoice();
    switch(userChoice+computerChoice)
    {
        case"rs":
        case"pr":
        case"sp":
        win(userChoice,computerChoice);
        break;
        case"rp":
        case"ps":
        case"sr":
        lose(userChoice,computerChoice);
        break;
        case"rr":
        case"pp":
        case"ss":
        draw(userChoice,computerChoice);
        break;
    }
    
}

game("c");

function main(){
rock_div.addEventListener('click', function(){
    game("r");
})


paper_div.addEventListener('click', function(){
    game("p");
})


scissors_div.addEventListener('click', function(){
    game("s");
})
}

main();