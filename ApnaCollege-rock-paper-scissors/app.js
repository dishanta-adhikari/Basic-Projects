let uerScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const compOptions = ["rock", "paper", "scissors"];
  // Generate a random number
  const randIdx = Math.floor(Math.random() * 3);
  return compOptions[randIdx];
};

const drawGame = () => {
  console.log("Game Was Darw.");
  msg.innerText = "Game was Draw. Play again";
  msg.style.backgroundColor = "";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    uerScore++;
    userChoicePara.innerText = uerScore;
    msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compChoicePara.innerText = compScore;
    msg.innerText = `You loose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  // Generate computer choise -> moduler programming
  const compChoice = genCompChoice();
  console.log(`User Choice = ${userChoice}`);
  console.log(`Cmputer Choise = ${compChoice}`);

  if (userChoice === compChoice) {
    // Draw game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
