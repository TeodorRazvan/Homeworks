function play() {
  // Array cu toate posibilitatile
  let options = ["Rock", "Paper", "Scissors"];

  // Alegerea aleatoare a computerului
  let computerChoice = options[Math.floor(Math.random() * options.length)];

  // Alegerea aleatoare a utilizatorului
  let userChoice = options[Math.floor(Math.random() * options.length)];

  // Afisarea alegerilor in consola
  console.log("Computer choice: " + computerChoice);
  console.log("User choice: " + userChoice);

  // Verificarea regulilor jocului si afisarea rezultatului
  if (computerChoice === userChoice) {
    console.log("It's a tie!");
  } else if (
    (computerChoice === "Rock" && userChoice === "Scissors") ||
    (computerChoice === "Paper" && userChoice === "Rock") ||
    (computerChoice === "Scissors" && userChoice === "Paper")
  ) {
    console.log("Computer wins!");
  } else {
    console.log("User wins!");
  }
}

// Apelarea functiei play pentru a incepe jocul
play();
