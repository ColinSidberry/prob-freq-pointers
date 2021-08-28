"use strict";

//Pseudo code:
/**
 * Turn both given integers into strings
 * 
 * Check if length of both strings is the same
 * -- if not, return false;
 * 
 * Create a freqCounter of both strings
 * 
 * Loop over string1
 *  For each key of string1, check if value of string1 and string2 don't match
 * -- if don't match , return false
 * 
 * After the loop
 * -- return true
 * 
 */

// add whatever parameters you deem necessary

//Docstring: function takes two integers and returns true if the frequency of digits in each integer match, or false if they don't.
function sameFrequency(firstInteger, secondInteger) {
    const firstString = firstInteger.toString();
    const secondString = secondInteger.toString();

    if (firstString.length !== secondString.length) {
        return false;
    }

    const frequenciesOfFirstString = createFrequencyCounter(firstString);
    const frequenciesOfSecondString = createFrequencyCounter(secondString);

    for (let key in frequenciesOfFirstString) {
        if (frequenciesOfFirstString[key] !== frequenciesOfSecondString[key]) {
            return false;
        }
    }

    return true;
}

//Note: Function that takes an iterable and returns an object with the frequencies of each element in the iterable
function createFrequencyCounter(iterable) {
let frequencies = {};

for (let val of iterable) {
    let valCount = frequencies[val] || 0;
    frequencies[val] = valCount + 1;
}

return frequencies;
}