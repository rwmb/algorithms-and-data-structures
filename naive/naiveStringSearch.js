function stringSearch(str, pattern) {
  let counter = 0;

  // loop over the string and try to find a match
  // increment the counter when a match is found

  if (pattern.length > str) return counter;

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < pattern.length; j++) {
      const stringCharacter = str[i + j];
      const patternCharacter = pattern[j];
      if (stringCharacter !== patternCharacter)
        break;
      if (j === pattern.length - 1)
        counter++;
    }
  }

  return counter;
}

module.exports = stringSearch;