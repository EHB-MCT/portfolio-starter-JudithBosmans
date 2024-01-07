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

function checkMatchaRating(name) {
  if (
    name == null ||
    typeof name !== "string" ||
    name.trim().length < 2 ||
    name.trim().length > 20
  ) {
    return false;
  }
  return true;
}

module.exports = {
  checkMatchaRating,
};
