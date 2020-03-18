var urlify = function(str, length) {
  let newStr = str.slice(0, 13)
  newStr = newStr.replace(" ", "%20")
  return newStr
};

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
