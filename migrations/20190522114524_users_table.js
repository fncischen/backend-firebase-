
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", userstable => {
    userstable.increments("id");
    userstable.string("username").notNullable();
    userstable.string("password").notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
