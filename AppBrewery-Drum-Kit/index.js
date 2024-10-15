for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    let buttoninnerHTML = this.innerHTML;

    buttonAnimation(buttoninnerHTML);

    switch (buttoninnerHTML) {
      case "w":
        let tom1 = new Audio("sounds/tom-1.mp3");
        tom1.play();
        break;

      case "a":
        let tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        break;

      case "s":
        tom3 = new Audio("sounds/tom-3.mp3");
        tom3.play();
        break;

      case "d":
        tom4 = new Audio("sounds/tom-4.mp3");
        tom4.play();
        break;

      case "j":
        crash = new Audio("sounds/crash.mp3");
        crash.play();
        break;

      case "k":
        kick = new Audio("sounds/kick-bass.mp3");
        kick.play();
        break;

      case "l":
        snare = new Audio("sounds/snare.mp3");
        snare.play();
        break;

      default:
        console.log(innerHTML);
    }
  });
}

// detecting keyboard press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "k":
      kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "l":
      snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    default:
      console.log(innerHTML);
  }
}

function buttonAnimation(pressedButton) {
  let ActiveButton = document.querySelector("." + pressedButton);
  ActiveButton.classList.add("pressed");

  setTimeout(function () {
    ActiveButton.classList.remove("pressed");
  }, 100);
}
