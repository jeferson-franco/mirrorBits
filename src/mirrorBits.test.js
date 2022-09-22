const solution = require('./mirrorBits.js');

test('test 1', () => {
    expect(solution(97)).toBe(67);
});

test('test 2', () => {
    expect(solution(8)).toBe(1);
});

test('test 3', () => {
    expect(solution(123)).toBe(111);
});

test('test 4', () => {
    expect(solution(86782)).toBe(65173);
});

test('test 5', () => {
    expect(solution(5)).toBe(5);
});
