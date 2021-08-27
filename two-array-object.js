/**
 * Psuedo Code
 * make an empty object
 * loop over keys array O(n)
 *  if (valuesArr[i] === undefined)
 *      object[keysArr[i]] = null
 *  else
 *      object[keysArr[i]] = valuesArr[i]
 * 
 * return object at the end of the loop
 */

// add whatever parameters you deem necessary
function twoArrayObject(keys,values) {
    let result = {};
    for(let i = 0; i < keys.length; i++){
        if(values[i] === undefined){
            result[keys[i]] = null;
        } else {
            result[keys[i]] = values[i];
        }
    }
    return result;
}



twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])
  // {'a': 1, 'b': 2, 'c': 3, 'd': null}

twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])
  // {'a': 1, 'b': 2, 'c': 3}

twoArrayObject(['x', 'y', 'z'], [1, 2])
  // {'x': 1, 'y': 2, 'z': null}