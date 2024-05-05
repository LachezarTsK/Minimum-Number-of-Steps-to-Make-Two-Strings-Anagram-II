
/**
 * @param {string} firstInput
 * @param {string} secondInput
 * @return {number}
 */
var minSteps = function (firstInput, secondInput) {
    const ALPHABET_SIZE = 26;
    const frequency = new Array(ALPHABET_SIZE).fill(0);
    for (let letter of firstInput) {
        ++frequency[toASCII(letter) - toASCII('a')];
    }
    for (let letter of secondInput) {
        --frequency[toASCII(letter) - toASCII('a')];
    }
    
    return calculateMinSteps(frequency);
};

/**
 * @param {number[]} frequency
 * @return {number}
 */
function calculateMinSteps(frequency) {
    let minSteps = 0;
    for (let current of frequency) {
        minSteps += Math.abs(current);
    }
    return minSteps;
}

/**
 * @param {string} letter
 * @return {number}
 */
function toASCII(letter) {
    return letter.codePointAt(0);
}
