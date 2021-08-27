"use strict";
/**
 * 

    Psuedo-------------
    freq counter of word O(n) and string O(m)
    loop through word's freq counter O(n)
    
    for each key in the words freq counter check 
        if key !in string 
            return false

        if the value at the key in the string's freq counter is greater than the value of the key in the word's freq O(1)
            if not return false

    Return tru after the loop

    Complexity = 2*O(n) + O(m) + O(1) => O(n+m)
 */

//Failing Test
// expect(canConstructWord("abcd", "")).toBe(false);

// add whatever parameters you deem necessary & write doc comment

//Note: Make a proper docstring
function canConstructWord(word, string) {//Note: make string => lettersSet
    if (!string) {
        return false;
    }

    let wordFreq = createFrequencyCounter(word);
    let stringFreq = createFrequencyCounter(string);

    // console.log("stringFreq", stringFreq);
    // console.log("undefined comparison: ", undefined < 1);
    for (let key in wordFreq) {
        // console.log("wordFreq[key]", wordFreq[key]);
        // console.log("stringFreq[key]", stringFreq[key]);

        // }

        if (stringFreq[key] < wordFreq[key]) {
            return false;
        }
    }
    return true;
}

//Note: Make docstring
function createFrequencyCounter(array) {//Note: make array iterable
    let freqs = {};

    for (let val of array) {
        let valCount = freqs[val] || 0;
        freqs[val] = valCount + 1;
    }

    return freqs;
}


//   Sample----------------
//  *  canConstructWord('aa', 'abc')
//     false -- can't build "aa" with only 1 "a"

//     canConstructWord('abc', 'dcba')
//     true -- can build "abc" with letters "abcd"

//     canConstructWord('aabbcc', 'bcabcaddff')
//     true -- can build "aabbcc" with those letters


console.log("Expecting false: ", canConstructWord('aa', 'abc'));
// console.log("Expecting true: ", canConstructWord('abc', 'dcba'));
// console.log("Expecting true: ", canConstructWord('aabbcc', 'bcabcaddff'));