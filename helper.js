
//Make a list (array) of letters
var letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

//This function will give us a random number
function pickRandomNumber(smallest, largest) {
  smallest = Math.ceil(smallest);
  largest = Math.floor(largest);
  return Math.floor(Math.random() * (largest - smallest + 1)) + smallest;
}

//This function will give us a random number.
function pickRandomLetter(){
    var randomNumber = pickRandomNumber(0,25);
    return letters[randomNumber];
}

//This function will pick a letter and put it on the screen.
function pickLetter() {
    var letterDisplay = document.getElementById('letterDisplay');
    letterDisplay.innerHTML = pickRandomLetter();
}

//This function will get the number of students who are tied and pick a random
//a random number to decide the winner. 
function breakTie() {
    var numStudents = parseInt(document.getElementById('numStudents').value);
    var studentNumber = pickRandomNumber(1, numStudents);
    var tieBreakDisplay = document.getElementById('tieBreakDisplay');
    tieBreakDisplay.innerHTML = studentNumber;
}
