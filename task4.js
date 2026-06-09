const answer = 42;
let guess = null;

while (guess !== answer) {
    let input = prompt("Guess a number between 1 and 100:");
    guess = Number(input);

    if (guess < answer) {
        alert("Too low! Try higher.");
    } else if (guess > answer) {
        alert("Too high! Try lower.");
    } else {
        alert(" Correct! The answer was " + answer);
    }
}