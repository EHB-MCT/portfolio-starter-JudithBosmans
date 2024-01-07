/* 
table.increments("id").primary();
table.string("name").notNullable();
table.string("age");
*/

const { checkMatchaRating } = require("../../helpers/endPointHelpers.js");

//Wat mag mijn user niet kunnen doen? Hier moet dus grondig over nadgedacht worden!
test("check rating rejects invalid names", () => {
  expect(checkMatchaRating("")).toBe(false); // Empty string
  expect(checkMatchaRating(null)).toBe(false); // Null
  expect(checkMatchaRating("i")).toBe(false); // Single character
  expect(checkMatchaRating(1)).toBe(false); // Non-string type
  expect(checkMatchaRating("   ")).toBe(false); // String with only whitespaces
  expect(checkMatchaRating("a".repeat(21))).toBe(false); // Too long string

  expect(checkMatchaRating("Judith")).toBe(true); // Valid name
  expect(checkMatchaRating("anne sophie")).toBe(true); // Another valid name
});
