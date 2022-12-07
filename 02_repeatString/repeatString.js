const repeatString = function(string, num) {
    if (num < 0) {
        return "ERROR";
    } else {

            let newArray = [];

            for (let i = 1; i <= num; i++) {
                newArray.push(string);
            }

            return newArray.join("");
    }
};

// Do not edit below this line
module.exports = repeatString;
