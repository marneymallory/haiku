import Haiku from './../src/haiku.js';  
 describe('Haiku', () => {
 test('should correctly create a haiku object with three lines',() => {
  const haiku = new Haiku("line1","line2","line3");
  expect(haiku);
  expect(haiku.line1).toMatch("line1");
  expect(haiku.line2).toMatch("line2");
  expect(haiku.line3).toMatch("line3");
  });

  test('should correctly determine if line is a string', () => {
  const haiku = new Haiku("line1","line2","line3");
  haiku.line1.isString();
  expect(true);
  });

  // test('should correctly determine if line1 is not a string', () => {
  //   haiku.isString();
  //   expect(false);
  //   });


});
