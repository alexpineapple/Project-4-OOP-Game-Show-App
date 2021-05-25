/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {

  constructor(phrases){
    //Used to track the number of missed guesses by the player
    this.missed = 0;
    // an array of five Phrase objects to use with the game
    this.phrases = phrases;
    //This is the Phrase object that’s currently in play
    this.activePhrase = null;
    //total number of hearts to show
    this.totalHealth = null;
  }

  startGame(difficulty) {
    //hides the start screen overlay
    let startScreenOverlay = document.querySelector("#overlay");
    startScreenOverlay.style.display = "none"

    //sets the activePhrase property with the chosen phrase
    this.activePhrase = this.getRandomPhrase();
    //display phrase to the board
    this.activePhrase.addPhraseToDisplay();

    //set the appropriate number of hearts based on difficulty
    let healthBar = document.querySelector("#scoreboard");

    switch(difficulty) {
      case "Easy":
        this.totalHealth = 8;
        break;
      case "Normal":
        this.totalHealth = 5;
        break;
      case "Hard":
        this.totalHealth = 3;
        break;
      }

      let hearts = `<ol>`;
      for (let i = 0; i < this.totalHealth; i++ ) {
        hearts += `<li class="tries"><img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30"></li>`
      }
      hearts += `</ol>`

      //should reset all previous heart images too
      healthBar.innerHTML = hearts;

      //reset all keys to be enabled and "key" class
      let keys = document.querySelectorAll("#qwerty .keyrow button");
      keys.forEach((key) => {
        key.disabled = false;
        key.className = "key";
      });
  }

  //randomly retrieves one of the phrases stored in the phrases array and returns it.
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * (this.phrases.length));
    return this.phrases[randomIndex];
  }

  //checks to see if the button clicked by the player matches a letter in the phrase, and then directs the game
  handleInteraction(button) {

    //Disable the selected letter’s onscreen keyboard button
    button.disabled = true;

    //If the phrase does not include the guessed letter, add the wrong CSS class
    if (this.activePhrase.checkLetter(button.innerHTML)) {
      button.className = "chosen";
      //check if won
      this.checkForWin();
    } else {
      //add the "wrong" CSS class
      button.className = "wrong";
      //remove a heart
      this.removeLife();
    }



  }

  //this method removes a life from the scoreboard
  removeLife() {
    //increments the missed property
    this.missed++;
    let hearts = document.querySelectorAll(".tries");
    //health should be depleted right to left, like video games :P
    hearts[this.totalHealth - this.missed].lastChild.src = "images/lostHeart.png";
    //game over if health has been depleted
    if (this.totalHealth === this.missed) {
      this.gameOver(false)
    }

  }

  //checks to see if the player has revealed all of the letters
  checkForWin() {
    let hiddenLetters = document.querySelectorAll(".hide");
    if (hiddenLetters.length === 0) {
      this.gameOver(true);
    }
  }

  //brings back overlay with win/lose message
  gameOver(hasWon) {
    let startScreenOverlay = document.querySelector("#overlay");
    startScreenOverlay.removeAttribute("style");

    let message = "";
    if (hasWon) {
      message = "You Win 🏆";
      startScreenOverlay.className = "win";
    } else {
      message = "You Lose 😞";
      startScreenOverlay.className = "lose";
    }

    document.querySelector("#game-over-message").textContent = message;
    document.querySelector("#phrase-was-message").textContent = `Hidden phrase: ${this.activePhrase.phrase}`

  }

}


//testGame.handleInteraction("a");
