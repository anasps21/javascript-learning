let secretNumber = 7;
let guess;

while (guess !== secretNumber) {
    guess = Number(prompt("Guess a number between 1 and 10"));

    if (guess < secretNumber) {
        console.log("Too Low!");
    } else if (guess > secretNumber) {
        console.log("Too High!");
    } else {
        console.log("Correct! You won!");
    }
}