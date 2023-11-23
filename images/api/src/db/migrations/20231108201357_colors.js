/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("artists", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("age");
    })
    .createTable("works", function (table) {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.integer("artist_id").unsigned().references("id").inTable("artists");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists("works").dropTableIfExists("artists");
};
