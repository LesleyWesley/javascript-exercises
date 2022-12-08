const reverseString = function(string) {
    const length = string.length;

                let forwardsArray = string.split("");
                let backwardsArray = [];

                for (let i = 0; i < length; i++) {
                    backwardsArray.push(forwardsArray[forwardsArray.length - 1]);
                    forwardsArray.pop();
                }

                return backwardsArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
