
const use=["rock","paper","scissors"]

function getComputerChoice(){
    let index= Math.floor(Math.random()*3);
    return use[index];
}

function playRound(playerSelection,computerSelection){
    if (playerSelection==computerSelection){
        alert("Draw")
    }else {
        if (playerSelection=="rock" && computerSelection=="scissors"){
            alert("You win!!")
        }else if(playerSelection=="paper" && computerSelection=="rock"){
            alert("You win!")
        }else if(playerSelection=="scissors" && computerSelection=="paper"){
            alert("You win!")
        }else{
            alert("You Lose")
        }    
    }
}
let computerSelection=getComputerChoice();
const playerSelection= prompt('Enter a choice:');
const i=0;



playRound();
