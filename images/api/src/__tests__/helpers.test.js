/* 
table.increments("id").primary();
table.string("name").notNullable();
table.string("age");
*/

const { checkArtistName } = require("./../helpers/endPointHelpers.js");

//Wat mag mijn user niet kunnen doen? Hier moet dus grondig over nadgedacht worden!
test("check name", () => {
  expect(checkArtistName("")).toBe(false);
  expect(checkArtistName(null)).toBe(false);
  expect(checkArtistName("i")).toBe(false);
  expect(checkArtistName(1)).toBe(false);

  expect(checkArtistName("Judith")).toBe(true)
  expect(checkArtistName("anne sophie")).toBe(true)

});
