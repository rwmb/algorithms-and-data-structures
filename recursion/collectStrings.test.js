const collectStrings = require('./collectStrings');

const obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}

test('collectStrings', () => {
  expect(collectStrings(obj)).toEqual(['foo', 'bar', 'baz']);
});