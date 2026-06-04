let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice")
const msg = document.querySelector("#msg")

const userScorePara = document.querySelector("#user-score")
const compScorePara = document.querySelector("#comp-score")


const genCompChoice = () => {
    let option = ["rock", "paper", "scissors"]
    const randIdx = Math.floor(Math.random()*3)
    return option[randIdx]
}

const drawGame = () => {
    // console.log("Game was draw")
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31"
}

const showWinneer = (userWin, userChoice, compChoice) => {
    if(userWin) {
        // console.log("userWin!")
        userScore++;
        userScorePara.innerText = userScore
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`
        msg.style.backgroundColor = "green"

    }else {
        console.log("user not Win!")
        compScore++;
        compScorePara.innerText = compScore
        msg.innerText = `You Lose! ${compChoice} beats Your ${userChoice}`
        msg.style.backgroundColor = "red"
    }
}


const playGame = (userChoice) => {
    // console.log("userChoice", userChoice)
    //Generate compChoice
    let compChoice = genCompChoice()
    // console.log("Comp Choice", compChoice)

    if(compChoice === userChoice) {
        //computer Win userWin
        drawGame() //Game Draw
    }else {
        let userWin = true; //user Win
        if(userChoice === "rock") { //compChoice Scissors,Paper
            userWin = compChoice === "paper" ? false : true
            //rock,Scissors compChoice bacheGaye.
        } else if(compChoice === "paper") {
            //user not Win
            userWin = compChoice === "scissors" ? false : true
        } else {
            //CompChoice rock,paper,scissors RehGya he.
            userWin = compChoice === "rock" ? false : true
        }
        showWinneer(userWin, userChoice, compChoice)
    }
}

choices.forEach((choice) => {
    // console.log(choice)
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id") //button clink id batayega
        // console.log("button was clicked", userChoice)
        playGame(userChoice)
    })
})