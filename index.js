const tutorials = [
  'what does the this keyword mean?',
  'what is the constructor oo pattern?',
  'implementing blockchain web api',
  'the test driven development workflow',
  'what is NaN and how can we check for it',
  'what is the difference between stopPropagation and preventDefault?',
  'immutable state and pure functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }).join(' ');
  });
}

// Export the function for testing
module.exports = titleCased;
