const rock = 1;
const paper = 2;
const scissors = 3;
let humanWinCount = 0;
let computerWinCount = 0;
let gameWinExplanation;

//For testing
// let humanPick = 3;
// let computerPick = 2;

let humanPick = Math.floor(Math.random() * (4 - 1) + 1); // Random number between 1 and 3
let computerPick = Math.floor(Math.random() * (4 - 1) + 1); // Random number between 1 and 3
// alert("The computer picks " + computerPick);
// alert("The human's pick is " + humanPick);
let gameCount = 1;
while (gameCount <= 5) {
  if (humanPick == computerPick) {
    gameWinExplanation = "Tie....Do again";
  } else {
    if (humanPick == rock) {
      if (computerPick == scissors) {
        humanWinCount++;
        gameWinExplanation =
          "Human Wins...Human's Rock crushes Computer's scissors";
      } else {
        if (computerPick == paper) {
          computerWinCount++;
          gameWinExplanation =
            "Computer Wins...Computer's Paper covers Human's rock";
        }
      }
    }
    if (humanPick == paper) {
      if (computerPick == rock) {
        humanWinCount++;
        gameWinExplanation =
          "Human Wins...Human's paper covers Computer's rock";
      } else {
        if (computerPick == scissors) {
          computerWinCount++;
          gameWinExplanation =
            "Computer Wins...Computer's scissors cuts Human's paper";
        }
      }
    }
    if (humanPick == scissors) {
      if (computerPick == rock) {
        computerWinCount++;
        gameWinExplanation =
          "Computer Wins...Computer's rock crushes Human's scissors";
      } else {
        if (computerPick == paper) {
          humanWinCount++;
          gameWinExplanation =
            "Human Wins...Human's scissors cuts Computer's paper";
        }
      }
    }
  }

  alert(
    gameWinExplanation +
      "--Score Human " +
      humanWinCount +
      " Computer " +
      computerWinCount
  );
  humanPick = Math.floor(Math.random() * (4 - 1) + 1); // Random number between 1 and 3
  computerPick = Math.floor(Math.random() * (4 - 1) + 1); // Random number between 1 and 3
  if (humanPick != computerPick) {
    gameCount++;
  }
}
