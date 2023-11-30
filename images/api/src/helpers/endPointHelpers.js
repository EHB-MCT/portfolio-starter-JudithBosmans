/* 
Check aan de hand van table informatie of alle fields erin zitten

table.increments("id").primary();
table.string("name").notNullable();
table.string("age");
*/

/* 
Check name of new student on post
@Params: student name
@returns: false if no match, true if right type
*/

function checkArtistName(name) {
  if (
    name == null ||
    name.length <= 1 ||
    typeof name !== "string" ||
    name.length > 20
  ) {
    return false;
  }
  return true;
}

module.exports = {
  checkArtistName,
};
