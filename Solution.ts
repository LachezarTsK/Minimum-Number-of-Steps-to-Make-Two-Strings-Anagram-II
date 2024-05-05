
function minSteps(firstInput: string, secondInput: string): number {
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

function calculateMinSteps(frequency: number[]): number {
    let minSteps = 0;
    for (let current of frequency) {
        minSteps += Math.abs(current);
    }
    return minSteps;
}

function toASCII(letter: string): number {
    return letter.codePointAt(0);
}
