
exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", userstable => {
    userstable.increments("id");
    userstable.string("username").notNullable().unique();
    userstable.string("password").notNullable();
    userstable.string("user_firebase_id").notNullable().unique();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
