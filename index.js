const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(function (tutorial) {
    // Split the tutorial title into words
    const words = tutorial.split(" ");
    
    // Capitalize the first letter of each word
    const titleCaseWords = words.map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });
    
    // Join the words back into a title-cased sentence
    return titleCaseWords.join(" ");
  });
}

// Example usage:
const titleCasedTutorials = titleCased();
console.log(titleCasedTutorials);