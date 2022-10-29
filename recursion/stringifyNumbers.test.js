const stringifyNumbers = require('./stringifyNumbers');

const obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

const stringified = {
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
};

test('stringifyNumbers', () => {
  expect(stringifyNumbers(obj)).toEqual(stringified);
});



