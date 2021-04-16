import Haiku from "./../src/haiku.js";
describe("Haiku", () => {
  test("should correctly create a haiku object with three lines", () => {
    const haiku = new Haiku("line1", "line2", "line3");
    expect(haiku);
    expect(haiku.line1).toMatch("line1");
    expect(haiku.line2).toMatch("line2");
    expect(haiku.line3).toMatch("line3");
  });
  test("should recognize if line1 has 5 syllables", () => {
    const haiku = new Haiku("I lay on the ground","line2","line3");
    expect(haiku.ifHaiku()).toEqual("5 syllables");
  });

  // "I lay on the ground"
  // "The snow feels nice on my fur"
  // "The snow feels nice on my fur"
here is some things 
let pizza;
});function pizza()