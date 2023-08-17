const removeFromArray = function(passedArr, ...valueToRemove) {
    // list out the original Array
    console.log(`passed array: ${passedArr}`);
    // list out the values that want to be removed
    console.log(`values to be removed: ${valueToRemove}`);
    // make a copy of the passed array to one that will be modified and returned
    modifiedArr = passedArr;
    console.log(`modified array start: ${modifiedArr}`);

    // for each item to be removed check the modified array for the item. if found remove the item from the modified array
    for (let index = 0; index < valueToRemove.length; index++) {
        for (let y = 0; y < modifiedArr.length; y++) {
            if (valueToRemove[index] === modifiedArr[y]) {
                modifiedArr.splice(y,1);
            }
            
        }
        
    }

    console.log(`Final modified array: ${modifiedArr}`);
    return modifiedArr;

    
};

// Do not edit below this line
module.exports = removeFromArray;
