const repeatString = function(selectedString, repeatCount) {

    if (repeatCount < 0) {
        return 'ERROR';
    }

    let newString = '';
    
    for (let index = 0; index < repeatCount; index++) {
        newString = newString + selectedString;

    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
