const sumAll = function(num1, num2) {

    if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) {
        return 'ERROR';
    }
    let sum = 0;
    let low = 0;
    let high = 0;
    if (num1 < num2) {
        low = num1;
        high = num2;
    }
    else {
        low = num2;
        high = num1;
    }
    while (low <= high) {
        sum += low++; 
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
