var checkPermute = function(stringOne, stringTwo) {
  let obj = {}
  for (let el of stringOne) {
    if (obj[el]) {
      obj[el]++
    } else {
      obj[el] = 1
    }
  }

  for (let el of stringTwo) {
    if (obj[el]) {
      obj[el]++
    } else {
      return false
    }
  }

  for (let key in obj) {
    if (obj[key]%2 !== 0) return false
  }
  
  return true
};

// Tests
console.log(checkPermute('aba', 'aab'), true);

console.log(checkPermute('aba', 'aaba'), false);

console.log(checkPermute('aba', 'aa'), false);
