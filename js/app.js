/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

var newGame;

//Add a click event listener to the "Start Game" button which creates a new Game object
let startButton = document.querySelector("#reset-buttons");
startButton.addEventListener('click', (event) => {

  if(event.target.tagName === "BUTTON") {
    const difficulty = event.target.innerHTML;
    //Create a new instance of the Game class
    newGame = createNewGame();
    newGame.startGame(difficulty);

  }
  //Create a new instance of the Game class
  //let newGame = new Game([new Phrase("alex"), new Phrase("kevin"), new Phrase("astrid")]);

  //start the game!
  //newGame.startGame();
});


//Add click event listeners to each of the onscreen keyboard buttons
let onscreenKeyboard = document.querySelector("#qwerty");
onscreenKeyboard.addEventListener('click', (event) => {


  if(event.target.tagName === "BUTTON") {
    const button = event.target;
    newGame.handleInteraction(button);
  }

});


//will return a new game object
function createNewGame() {
  let options = [];
  let topics = ["Star Wars", "Famous Musician", "Nintendo", "Musical Instrument"];

  const randomIndex = Math.floor(Math.random() * topics.length);
  const topic = topics[randomIndex];

  switch(topic) {

    case "Star Wars":
      options = ["Obi Wan Kenobi", "Anakin", "Han Solo", "Ahsoka Tano", "Moff Gideon", "Jabba the Hutt"];
      break;
    case "Famous Musician":
      options = ["Elvis Presley", "Freddie Mercury", "John Lennon", "George Harrison", "Ludwig van Beethoven"];
      break;
    case "Nintendo":
      options = ["Donkey Kong", "Yoshi", "Mario", "Luigi", "Samus"];
      break;
    case "Musical Instrument":
      options = ["Obi Wan Kenobi", "Anakin", "Han Solo"];
      break;

    default:
      options = ["Alex", "Pineapple"]
  }

  return new Game(options.map(word => new Phrase(word)));
}
