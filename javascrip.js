let value = 0

const rock = document.querySelector(".ROCK");
const scissors = document.querySelector(".SCISSORS");
const paper = document.querySelector(".PAPER");

const result = document.querySelector(".RESULT");
const score = document.querySelector(".SCORE");

function changeResult(string) { 
    if (string === "rock") { 
        result.textContent = "Result: rock";
    }
    else if (string === "scissors") { 
        result.textContent = "Result: scissors";
    }
    else if (string === "paper") { 
        result.textContent = "Result: paper"
    }
}

function addScore() { 
    value += 1
    score.textContent = "Score: " + value

}



rock.addEventListener("click" , () => { 
    changeResult("rock");
    addScore();

});

scissors.addEventListener("click" , () => { 
    changeResult("scissors");
    addScore();
    
});

paper.addEventListener("click" , () => { 
    changeResult("paper");
    addScore();
    
});
