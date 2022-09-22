function solution(a) {
    return parseInt(a.toString(2).split('').reverse().join(''), 2);
}

module.exports = solution;

// npm init -y
// npm i jest-cli -g
// package.json: "scripts": { "test": "jest" }
// npm test mirrorBits

// alternative solution
