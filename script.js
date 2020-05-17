/**
 * Guess The Number Game
 * DONE: Get user value from input and save it to variable numberGuess
 * DONE: Generate a random number 1 to 100 and save it to variable correctNumber
 * DONE: Console whether the guess is too high, too low, or is correct inside playGame function
 * DONE: Create a function called displayResult to move the logic for if the guess is too high, too low, or correct
 * DONE: Complete the showYouWon, showNumberAbove, showNumberAboveTen, showNumberBelow, showNumberBelowTen
 * TODO: Use the showYouWon... functions within displayResult to display the correct dialog
 * TODO: Save the guess history in a variable called guess
 * TODO: Display the guess history using displayHistory() function
 * TODO: Use the initGame() function to restart the game
 */

// Variable to store the list of guesses

// Variable for store the correct random number

let randomNumber = getRandomNumber();
window.onload = function () {
  document.getElementById("number-submit").addEventListener("click", playGame);
  document.getElementById("restart-game").addEventListener("click", initGame);
};

/**
 * Functionality for playing the whole game
 */
function playGame() {
  // *CODE GOES BELOW HERE *
  const myGuess = document.getElementById("number-guess").value;
  const isCurrect = parseInt(myGuess) - randomNumber;
  displayResult(isCurrect);
}

/**
 * Show the result for if the guess it too high, too low, or correct
 * HINT: Use if, else if, else statement
 */
// *CODE GOES BELOW HERE *
function displayResult(isCurrect) {
  if (isCurrect === 0) {
    showYouWon();
  } else if (isCurrect <= -10) {
    showNumberBelowTen();
  } else if (-10 < isCurrect && isCurrect < 0) {
    showNumberBelow();
  } else if (0 < isCurrect && isCurrect < 10) {
    showNumberAbove();
  } else if (isCurrect >= 10) {
    showNumberAboveTen();
  }
}

/**
 * Initialize a new game by resetting all values and content on the page
 * HINT: reset the correctNumber, guesses, and HTML content
 */
function initGame() {
  // *CODE GOES BELOW HERE *
}

/**
 * Reset the HTML content for guess history
 */
function resetResultContent() {
  document.getElementById("result").innerHTML = "";
}

/**
 * Return a random number between 1 and 100
 * HINT: Use Math.random
 */
function getRandomNumber() {
  // *CODE GOES BELOW HERE *
  return Math.floor(Math.random() * 100) + 1;
}

/**
 * Save guess history
 * HINT: Search Google "append to array in javascript"
 * HINT: Use the guesses variable
 */
function saveGuessHistory(guess) {
  // *CODE GOES BELOW HERE *
}

/**
 * Display guess history to user
 * HTML TO USE:
 * <ul class='list-group'>
 *  <li class='list-group-item'>You guessed {number}</li
 * </ul>
 * HINT: use while loop and string concatentation to create a list of guesses
 */
function displayHistory() {
  let index; // TODO
  let list = "<ul class='list-group'>";
  // *CODE GOES BELOW HERE *
  list += "</ul>";
  document.getElementById("history").innerHTML = list;
}

/**
 * Retrieve the dialog based on if the guess is wrong or correct
 */
function getDialog(dialogType, text) {
  let dialog;
  switch (dialogType) {
    case "warning":
      dialog = "<div class='alert alert-warning' role='alert'>";
      break;
    case "won":
      dialog = "<div class='alert alert-success' role='alert'>";
      break;
  }
  dialog += text;
  dialog += "</div>";
  return dialog;
}

function showYouWon() {
  const text = "大正解！！";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'won' and text parameters
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("won", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAboveTen() {
  const text = "もっと小さい数字だよ？";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberAbove() {
  const text = "ちょっとだけ小さい数字だよ？";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelowTen() {
  const text = "もっと大きい数字だよ？";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}

function showNumberBelow() {
  const text = "ちょっとだけ大きい数字だよ？";
  /**
   * Retrieve the dialog using the getDialog() function
   * and save it to variable called dialog
   * HINT: Use the 'warning' and text parameters
   */
  // *CODE GOES BELOW HERE *
  let dialog = getDialog("warning", text);
  document.getElementById("result").innerHTML = dialog;
}
