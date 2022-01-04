let Userscore = 0;
let Computerscore = 0;
const Userscore_span = document.getElementById("User-score");
const Computerscore_span = document.getElementById("Comp-score");
const scores_div = document.querySelector(".scores");
const result_p =document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter == "r") return "Rock";
    if(letter == "p") return "Paper";
    return "Scissors";
}

function win(userChoice, ComputerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    Userscore++;
    Userscore_span.innerHTML=Userscore;
    Computerscore_span.innerHTML=Computerscore;
    
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(ComputerChoice)}${smallCompWord}. You Win! `;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);

}


function lose(userChoice, ComputerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    Computerscore++;
    Userscore_span.innerHTML=Userscore;
    Computerscore_span.innerHTML=Computerscore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(ComputerChoice)}${smallCompWord}. Computer Win!`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);

}

function draw(userChoice,ComputerChoice){
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(ComputerChoice)}${smallCompWord}. Game Drawn `;
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);

}


function game(userChoice){
    const ComputerChoice = getComputerChoice();
    switch (userChoice + ComputerChoice) {
        case "rs":
        case "pr":
        case "sp":
        win(userChoice,ComputerChoice);
        break;
        case "rp":
        case "ps":
        case "sr":
        lose(userChoice,ComputerChoice);
        break;
        case "rr":
        case "pp":
        case "ss":
        draw(userChoice,ComputerChoice);
        break;
    }
}

function main(){

rock_div.addEventListener('click',() => game("r"));
paper_div.addEventListener('click',() => game("p"));
scissors_div.addEventListener('click',() => game("s"));
}
main();