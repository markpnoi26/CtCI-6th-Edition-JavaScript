var oneAway = function(string1, string2) {
    let obj = {}
    for (let i=0; i<string1.length; i++) {
        if (obj[string1[i]]) {
            obj[string1[i]]++
        } else {
            obj[string1[i]] = 1
        }
    }

    for (let i=0; i<string2.length; i++) {
        if (obj[string2[i]]) {
            obj[string2[i]]--
        } 
    }

    let charCount = 0

    for (let key in obj) {
        if (obj[key] !== 0) {
            charCount = charCount + obj[key]
        }
    }

    if (charCount > 1) return false
    return true

};


// Test
console.log(oneAway('pale', 'ple'), true);
console.log(oneAway('pales', 'pale'), true);
console.log(oneAway('pale', 'bale'), true);
console.log(oneAway('pale', 'bake'), false);
