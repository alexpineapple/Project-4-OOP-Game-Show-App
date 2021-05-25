/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

 class Phrase {

   //Constructor with phrase parameter, converted to all lower case.
   constructor(phrase){
     this.phrase = phrase.toLowerCase();
   }

   //adds letter placeholders to the display when the game starts
   addPhraseToDisplay() {
     let phraseDisplay = document.querySelector("#phrase");
     let output = `<div id="phrase" class="section"><ul>`;

     //loop through each phrase letter
     for (let i = 0; i < this.phrase.length; i++){
       if (this.phrase[i] === " ") {
         output += `<li class="space"> </li>`;
       } else {
         output += `<li class="hide letter ${this.phrase[i]}">${this.phrase[i]}</li>`;
       }
     }
     output += `</ul></div>`
     phraseDisplay.innerHTML = output;
   }

   //checks to see if the letter selected by the player matches a letter in the phrase.
   checkLetter(letter) {
     let hasMatch = false;
     //loop through each phrase letter
     for (let i = 0; i < this.phrase.length; i++){
       if (this.phrase[i] === letter) {
         this.showMatchedLetter(letter);
         hasMatch = true;
       }
     }
    return hasMatch;
   }

   //reveals the letter(s) on the board that matches the player's selection
   showMatchedLetter(letter) {
     let letterToShow = document.querySelector(`.hide.letter.${letter}`);
     letterToShow.className = `show letter ${letter}`
   }

 }


//let testPhrase = new Phrase("alex p");
//testPhrase.addPhraseToDisplay();
//testPhrase.showMatchedLetter("a")

//console.log(test.checkLetter("a"));
