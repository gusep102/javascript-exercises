const sumAll = function(startNum, stopNum) {
    let sumOfNum =0;

    // check if numbers were provided
    if (typeof startNum != "number" || typeof stopNum != "number") {
        return 'ERROR';
    }

    // check for negative numbers
    if (startNum < 0 || stopNum < 0) {
        return 'ERROR';
    }

    // checks if start number is larger than stop number. if so swap positions
    if (startNum > stopNum) {
        let temp = startNum;
        startNum = stopNum;
        stopNum = temp;
    }

    //loop from start to stop numbers adding each one
    for (let index = startNum; index <= stopNum; index++) {
        sumOfNum = sumOfNum + index;
    }
    return sumOfNum;
};

// Do not edit below this line
module.exports = sumAll;
