const reverseString = function(inputString) {

    let reversedString = '';
    for (let index = inputString.length; index >= 0 ; index--) {
        reversedString = reversedString + inputString.charAt(index);
        
    }
    return reversedString;

};

// Do not edit below this line
module.exports = reverseString;
