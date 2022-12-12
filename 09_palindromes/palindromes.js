const palindromes = function (string) {
    //Removes punctuation and spaces from original string
    const formattedString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{1,}/g, "").toLowerCase();

    const forwardArray = formattedString.split("");
    let backwardsArray = [];

    for (let i = forwardArray.length-1; i >= 0; i--) {
      backwardsArray.push(forwardArray[i]);
    }

    if (backwardsArray.join("") === formattedString) {
      return true;
    } else {
      return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
