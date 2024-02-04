let userScore=0;
let compScore=0;


let userScorePara=document.querySelector("#user-score");
let compScorePara=document.querySelector("#comp-score");
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx= Math.floor(Math.random()*3);
    return options[randIdx];
}

const playGame=(userChoice) =>{
    const compChoice = genCompChoice();

    //draw condition
    if(userChoice == compChoice){
        drawGame();
    }

    else{
        let userWin=true;
        if(userChoice === "rock"){
            //then compChoice can be paper or scissors
            userWin= compChoice=== "scissors" ? true : false;
        }
        else if(userChoice === "paper"){
            //then compChoice can be rock or scissors
            userWin= compChoice=== "rock" ? true : false;
        }
        else //(userChoice === "scissors")
        {
            //then compChoice can be paper or rock
            userWin= compChoice=== "paper" ? true : false;
        }

        showWinner(userWin,userChoice,compChoice);
    }
};

const drawGame=() =>{
    msg.innerText="Game was draw! Play Again";
    msg.style.backgroundColor="#415A77";

};

const showWinner = (userWin,userChoice,compChoice) =>{
    if(userWin){
        msg.innerText=`You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#386641";
        userScore++;
        userScorePara.innerText=userScore;
    }
    else{
        msg.innerText=`You Lost! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="#BC4749";
        compScore++;
        compScorePara.innerText=compScore;
    }
};