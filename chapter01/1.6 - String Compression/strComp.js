var strComp = function(string) {

    let curLetter = string[0]
    let curCount = 0
    let strAr = []

    for (let i =0; i<string.length; i ++) {
        if (string[i] === curLetter) {
            curLetter = string[i]
            curCount++
        } else if (string[i] !== curLetter){
            strAr.push(`${curLetter}${curCount}`)
            curCount = 1
            curLetter = string[i]
        }
    }
    strAr.push(`${curLetter}${curCount}`)

    return strAr.join("")
};

// Test
console.log('aaaaaa', strComp('aaaaaa'), 'a6');
console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');
