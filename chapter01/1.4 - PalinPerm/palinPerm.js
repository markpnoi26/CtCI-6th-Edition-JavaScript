var palinPerm = function(string) {
    let newString = string.toLowerCase()
    let obj = {}
    for (let i=0; i < newString.length; i++) {
        if (newString[i] !== " ") {
            if (obj[newString[i]]) {
                obj[newString[i]]++
            } else {
                obj[newString[i]] = 1
            }
        }
    }

    let oddCount = 0

    for (let key in obj) {
        if (obj[key]%2 !== 0) {
            oddCount++
        }
    }

    if (oddCount > 1) return false
    return true
};

// TESTS
console.log(palinPerm('Tact Coa'), 'true');
console.log(palinPerm('Tact boa'), 'false');
console.log(palinPerm('race car'), 'true')
console.log(palinPerm('racet car'), 'false')