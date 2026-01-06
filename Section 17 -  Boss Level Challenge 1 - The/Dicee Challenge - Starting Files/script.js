let randomNumber1 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6
let randomNumber2 = Math.floor(Math.random() * 6) + 1; // random number between 1 and 6

// Update the dice images based on the random numbers
document.querySelector(".img1").setAttribute("src", `images/dice${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `images/dice${randomNumber2}.png`);

// Determine the winner and update the heading
if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}

