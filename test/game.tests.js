// let assert = require("assert");
// let guessing_Game = require("../GuessingGame/index.js")
describe('guessing_Game function', function() {
    describe('', function() {

        it('should generate a random number between 1 and 100', function() {
            let testingGame = guessing_Game();
            testingGame.guessBtnClicked();
            assert.equal(testingGame.guessBtnClicked())
        });
        it('should display a message if your guess is too high', function() {
            let testingGame = guessing_Game();
            testingGame.guessBtnClicked(100);
            assert.equal(testingGame.guessBtnClicked('Your guess is to high'))
        });
        it('should display a message if your guess is too low', function() {
            let testingGame = guessing_Game();
            testingGame.guessBtnClicked(0);
            assert.equal(testingGame.guessBtnClicked('Your guess is to low'))
        });
        it('should display a message correct, the secret number is ${number}', function() {
            let testingGame = guessing_Game();
            testingGame.guessBtnClicked(100);
            assert.equal(testingGame.guessBtnClicked('Your guess is to high'))
        });
        it('should return an error if your guess has exceeded the number range of 1 and 100', function() {
            let testingGame = guessing_Game();
            testingGame.guessBtnClicked(500);
            assert.equal(testingGame.guessBtnClicked('you have exceeded the range enter a number between 1 & 100'))
        });
        it('should return a message when a new game has started', function() {
            let testingGame = guessing_Game();
            testingGame.newGame();
            assert.equal(testingGame.guessBtnClicked('New Game started'))
        });
        it('should return the new game started should display for 5 seconds', function() {
            let testingGame = guessing_Game();
            testingGame.newGame();
            assert.equal(testingGame.guessBtnClicked('New Game started'))
        });
        it('should generate a new random number 5 seconds after a successful guess', function() {
            let testingGame = guessing_Game();
            testingGame.guessBtnClicked();
            assert.equal(testingGame.guessBtnClicked())
        });
        it('should generate a new random number if the widget is refreshed', function() {
            let testingGame = guessing_Game();
            testingGame.guessBtnClicked();
            assert.equal(testingGame.guessBtnClicked())
        });

    });

})