const LetterCounter = () => {

  // Declare a variable to store the result.
  let result = 0;

  // Iterate over the characters in the phrase.
  for (letter in phrase) {

    // Convert the character to a number and add 1 to result.
    result = Number(letter) + 1;
  }

  // Return an object with the total number of letters.
  return {"The total number of letters is": result};
}

const phrase = prompt("Enter the phrase")
console.log(LetterCounter(phrase))
