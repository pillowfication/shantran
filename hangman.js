const sowpods = require('pf-sowpods');

function calcDifficulty(word) {
  return word.length;
}

function nextGuess(signature, wrongGuesses) {
  return false;
}

/**
 * asdf Function
 * @param  {[type]} signature    A string like "___DF_S__"
 * @param  {[type]} wrongGuesses ["A", "B", "C"]
 * @return {[type]}              list of all words that match
 */
function getMatchingWords(signature, wrongGuesses) {
  const matchingWords = [];
  for (const word of sowpods) {
    if (matchesSignature(signature, word) && doesntContain(word, wrongGuesses)) {
      matchingWords.push(word);
    }
  }
  return matchingWords;
}
function doesntContain(word, wrongGuesses) {
  for (const wrongGuess of wrongGuesses) {
    if (word.includes(wrongGuess)) {
      return false;
    }
  }
  return true;
}
function matchesSignature(signature, word) {
  if (signature.length !== word.length) {
    return false;
  }

  for (let index = 0; index < signature.length; index += 1) {
    if (signature[index] !== word[index] && signature[index] !== '_') {
      return false;
    }
  }
  return true;
}

let highestDifficulty = 0;
let difficultWords = [];

for (const word of sowpods) {
  const wordDifficulty = calcDifficulty(word);

  if (wordDifficulty === highestDifficulty) {
    difficultWords.push(word);
  }

  else if (wordDifficulty > highestDifficulty) {
    highestDifficulty = wordDifficulty;
    difficultWords = [word];
  }
}

console.log(difficultWords.join('\n'));
