let randomNumber = Math.ceil((Math.random() * 100))

const numberGuess = document.querySelector(".numberGuess");
const guessBtn = document.querySelector(".guessBtn");
const message = document.querySelector(".message");


function guessBtnClicked() {
	const guessedNo = Number(numberGuess.value);

	if (guessedNo < randomNumber) {
		message.innerHTML = "Your guess is too low!";

		setTimeout(function(){
			message.innerHTML = "";
		}, 3500);

	} else if (guessedNo > randomNumber) {
		message.innerHTML = "Your guess is too high!";
		setTimeout(function(){
			message.innerHTML = "";
		}, 3500);

	} else {
		message.innerHTML =  `Correct, the secret number is ${guessedNo}!`;
	}

	setTimeout(function(){
		message.innerHTML = "";
	}, 3500);

	// location.reload(forceGet);
/* <meta http-equiv="refresh" content="guessedNo > randomNumber"/> */
}

function reload() {
	if (guessedNo = randomNumber) {
		message.innerHTML = `Correct, the secret number is ${guessedNo}!`;

		setTimeout(function(){
			message.innerHTML = "";
		}, 3500);
	} else {
		window.location.reload();
	}
}

// window.location.reload();



guessBtn.addEventListener('click', guessBtnClicked)
// guessBtn.addEventListener('click', reload)
