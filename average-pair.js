/**
 * Pseudo code: 
 * (Good use of the pointers)
 * 
 * Check if array.length = 0
 *  if yes, return false;
 * 
 * Create 2 pointers (using the createPointer function), left and right
 *  -- left pointer = 0
 *  -- right pointer = array.length - 1
 * 
 * Run a loop that continues to run while left < right
 *  -- create avg of the array[left] + array[right]
 *  -- if condition that checks to see if the avg === targetAvg
 *      -- if true, return true;
 *       -- else if avg > targetAvg;
            -- Decrease right by 1
        -- else (if avg < targetAvg)
            -- Increase left by 1
    
 *  If loop ends without returning true:
    -- return false;
 */


// add whatever parameters you deem necessary
function averagePair(array,targetAvg) {
    if(array.length === 0) { //O(1) or O(n)???
        return false;
    }

    let left = 0;
    let right = array.length -1;

    while (left < right) { //O(n)
        let avg = (array[left] + array[right]) /2; //O(1)

        if (avg === targetAvg) { //O(1)
            return true;
        }
        else if (avg > targetAvg) { //O(1)
            right -= 1;
        }
        else {
            left += 1; //O(1)
        }
    }
    return false;
}
