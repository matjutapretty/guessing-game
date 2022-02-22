let randomNumber = Math.ceil((Math.random() * 100))

const numberGuess = document.querySelector(".numberGuess");
const guessBtn = document.querySelector(".guessBtn");
const message = document.querySelector(".message");


function guessBtnClicked() {
	const guessedNo = Number(numberGuess.value);

	if (guessedNo < randomNumber) {
		message.innerHTML = "Your guess is too low!";
	} else if (guessedNo > randomNumber) {
		message.innerHTML = "Your guess is too high!";
	} else {
		message.innerHTML =  `Correct, the secret number is ${guessedNo}!`;
		reset();
	}
	setTimeout(function(){
		message.innerHTML = "";
	}, 2500);
}
function reset() {
	randomNumber = Math.ceil((Math.random() * 100))
}

guessBtn.addEventListener('click', guessBtnClicked)