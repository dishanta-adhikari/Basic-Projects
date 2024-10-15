
function rand() {   // Generate a random number.
    return Math.round((Math.random() * 5) + 1); //for eliminating 0 and 7 we have to use +1 and *5 resp.
}

let randomNum1 = rand();    //insert 1st random number into a variable.

let randomNum2 = rand();    //insert 2nd random number into a variable.


document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNum1 + ".png"); //set the 1st image.


document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNum2 + ".png"); //set the 2nd image.



if (randomNum1 === randomNum2) {        // Comparing the random Numbers.
    document.querySelector("h1").textContent = "Draw!";
} else if (randomNum1 > randomNum2) {
    document.querySelector("h1").textContent = "Player 1 Wins! 🚩";
} else {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}


