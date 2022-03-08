function guessing_Game (){
    let randomNumber = Math.ceil((Math.random() * 100))

    function newGame(){

    }

    function guessBtnClicked() {
        const guessedNo = Number;
        const message = "";
    
        if (guessedNo > 100 || guessedNo < 1) {
            message.innerHTML = 'You have exceeded the limit, enter a number between 1 & 100';
    
            // setTimeout(function() {
            //     location.reload()
            // }, 5000);
    
        }else if (guessedNo < randomNumber) {
            message.innerHTML = "Your guess is too low!";
            // setTimeout(function(){
            //     message.innerHTML = "";
            // }, 3000);
    
        } else if (guessedNo > randomNumber) {
            message.innerHTML = "Your guess is too high!";
            // setTimeout(function(){
            //     message.innerHTML = "";
            // }, 3000);
    
        } else {
            message.innerHTML =  `Correct, the secret number is ${guessedNo}!`;
            // reset()
            // setTimeout(function(){
            // message.innerHTML = "";
            // newGame()
    //         message.innerHTML = 'New Game Started!!!'
    //     }, 5000);
        }
    }

    function reset(){

    }
    return {
        newGame,
        guessBtnClicked,
        reset
    }
}