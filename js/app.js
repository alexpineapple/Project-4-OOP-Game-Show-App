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
});


//Add click event listeners to each of the onscreen keyboard buttons
let onscreenKeyboard = document.querySelector("#qwerty");
onscreenKeyboard.addEventListener('click', (event) => {

  if(event.target.tagName === "BUTTON") {
    const button = event.target;
    newGame.handleInteraction(button);
  }

});

//extra credit - use the keyup event to listen to
document.querySelector(".main-container").addEventListener('keyup', (event) => {
  console.log("ass");
});


//will return a new game object
function createNewGame() {

  let phrasesToGuess = [
    {
      topic:"Star Wars Character",
      phrases:["Obi Wan Kenobi", "Anakin", "Han Solo", "Ahsoka Tano", "Moff Gideon", "Jabba the Hutt"]
    },
    {
      topic:"Famous Musician",
      phrases:["Elvis Presley", "Freddie Mercury", "John Lennon", "George Harrison", "Ludwig van Beethoven"]
    },
    {
      topic:"Nintendo Character",
      phrases:["Donkey Kong", "Yoshi", "Mario", "Luigi", "Samus"]
    },
    {
      topic:"Programming Language",
      phrases:["Javascript", "Assembly", "CoffeeScript", "Phython", "Visual Basic", "Brainfuck"]
    }
  ];

  //obtain a random index
  const randomIndex = Math.floor(Math.random() * phrasesToGuess.length);

  //set the phrase hint (basically the topic)
  let hint = document.querySelector("#hint");
  hint.innerHTML = "Click me to show a hint!";
  hint.addEventListener('click', (event) => {
    hint.innerHTML = phrasesToGuess[randomIndex].topic;
  });

  //create the new game object from the chosen phrases group
  return new Game(phrasesToGuess[randomIndex].phrases.map(word => new Phrase(word)));
}
