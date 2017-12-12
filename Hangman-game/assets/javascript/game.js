//GLOBAL VARIABLES
//---------------------------------------
// records how many times a letter can be pressed
var doubleWord = ['a','b','c',
'd','e','f',
'g','h','i',
'j','k','l',
'm','n','o',
'p','q','r',
's','t','u',
'v','w','x',
'y','z'];
//holds all of the words
var wordBank =['lebron','kobe','jordan', 'magic', 'bird','wade','iverson','kareem','russell','wilt','carter'];
var chosenWord = "";
var lettersInWord = [];
var numberOfBlanks = 0;
var blanksAndSuccesses =[];
var incorrectLetters = [];
//Counters
var winCount = 0;
var lossCount = 0;
var guessesLeft = 9;
var correctGuessCounter = 0;
//FUNCTIONS
//----------------------------------------
function reset()
{
chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
lettersInWord = chosenWord.split('');
numberOfBlanks = lettersInWord.length;

//RESET
//===========================================================
letterGuessed = 0;
correctGuessCounter = 0;
guessesLeft = 9;
incorrectLetters =[];
blanksAndSuccesses =[];
doubleWord = ['a','b','c',
    'd','e','f',
    'g','h','i',
    'j','k','l',
    'm','n','o',
    'p','q','r',
    's','t','u',
    'v','w','x',
    'y','z'];
test=false;
startGame();
}
function startGame()
{
chosenWord = wordBank[Math.floor(Math.random() * wordBank.length)];
lettersInWord = chosenWord.split('');
numberOfBlanks = lettersInWord.length;

//===========================================================
correctGuessCounter = 0;
guessesLeft = 9;
incorrectLetters =[];
blanksAndSuccesses =[];
doubleWord = ['a','b','c',
    'd','e','f',
    'g','h','i',
    'j','k','l',
    'm','n','o',
    'p','q','r',
    's','t','u',
    'v','w','x',
    'y','z'];

for(var i = 0; i< numberOfBlanks; i++)
{
blanksAndSuccesses.push('_');
document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses;
}

document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
document.getElementById('numGuesses').innerHTML = guessesLeft;
document.getElementById('winCounter').innerHTML = winCount;
document.getElementById('lossCounter').innerHTML = lossCount;
document.getElementById('wrongGuesses').innerHTML = incorrectLetters;
// Testing / Debugging
console.log(chosenWord);
console.log(lettersInWord);
console.log(numberOfBlanks);
console.log(blanksAndSuccesses);
}

function compareLetters(userKey)
{
console.log('WORKING!');
//If the key the user puts in is correct  
if(chosenWord.indexOf(userKey) > -1)
{
  for(var i = 0; i < numberOfBlanks; i++)
  {
      //Fills in right index with user key
      if(lettersInWord[i] === userKey)
      {
          correctGuessCounter++;
          blanksAndSuccesses[i] = userKey;
          document.getElementById('wordToGuess').innerHTML = blanksAndSuccesses.join(' ');
      }	
  }
  console.log(blanksAndSuccesses);
}
//if the wrong Key is put in 
else
{
incorrectLetters.push(userKey);
  guessesLeft--;
  document.getElementById('numGuesses').innerHTML = guessesLeft;
  document.getElementById('wrongGuesses').innerHTML = incorrectLetters;

  console.log('Wrong Letters = ' + incorrectLetters);
  console.log('Guesses left are ' + guessesLeft);
}



}
function winLose()
{
// When number blanks if filled with right words then you win
if(correctGuessCounter === numberOfBlanks)
{
//Counts Wins 
winCount++;

document.getElementById('winCounter').innerHTML = winCount;
alert('You Win');
reset();
}
// When number of Guesses reaches 0 then You lose
else if(guessesLeft === 0)
{
//Counts losses
lossCount++;

document.getElementById('lossCounter').innerHTML = lossCount;
alert('You Lose');
reset();
}
}

//-------------------------------------------	
//Initiates the Code
startGame();

document.onkeyup = function(event)
{
test = true;
var letterGuessed = event.key;
for(var i = 0; i < doubleWord.length; i++)
{	
if(letterGuessed === doubleWord[i] && test === true)
{
var spliceDword = doubleWord.splice(i,1);

console.log('Double word is = ' + doubleWord[i])
console.log('Spliced Word is = ' + spliceDword);

compareLetters(letterGuessed);
winLose();
}
}		

}