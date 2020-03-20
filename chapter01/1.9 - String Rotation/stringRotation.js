var stringRotation = function(string1, string2) {
    let counter = 0
    let currStr = string1

    while (counter !== string1.length) {
        // rotate string 
        // compare to string 2
        // can only iterate the numer of times characters in string
        currStr = currStr.slice(1) + currStr[0]
        console.log(currStr, string2)
        if (currStr === string2) return true
        counter++
    }

    return false
};


// Approaches:
// a) sorting chars before comparing -> know if it is permutation but not know if it is in the right order
// b) look for starting character before moving around and rotating -> starting characters might repeat
// c) break string 2 into a front and back, and ensure that front tallies with isSubstring before doing isSubstring

// Test
console.log(stringRotation('waterbottle', 'erbottlewat'), true);
console.log(stringRotation('waterbottle', 'erbotlewatt'), false);
console.log(stringRotation('aaata', 'aataa'), true);
