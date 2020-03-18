var allUniqueChars = function(string) {

  // O(n^2) approach, no additional data structures used
  // for each character, check remaining characters for duplicates
  for (var i = 0; i < string.length; i++) {
    for (var j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        return false; // if match, return false
      }
    }
  }
  return true; // if no match, return true
};

const everyCharUnique = (str) => {
  let obj = {}
  for (let el of str) {
    if (obj[el]) {
      obj[el]++
    } else {
      obj[el] = 1
    }

    if (obj[el] === 2 ) {
      return false
    }
  }
  return true
};

/* TESTS */
console.log(everyCharUnique('abcd'), 'true');
console.log(everyCharUnique('abccd'), 'false');
console.log(everyCharUnique('bhjjb'), 'false');
console.log(everyCharUnique('mdjq'), 'true');
