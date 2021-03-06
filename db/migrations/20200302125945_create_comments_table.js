exports.up = function(knex) {
  return knex.schema.createTable("comments", function(tableBuilder) {
    tableBuilder.increments("comment_id").primary();
    tableBuilder
      .string("author")
      .references("users.username")
      .notNullable()
      .onDelete("CASCADE");
    tableBuilder
      .integer("article_id")
      .references("articles.article_id")
      .notNullable()
      .onDelete("CASCADE");
    tableBuilder.integer("votes").defaultTo(0);
    tableBuilder.timestamp("created_at").defaultTo(knex.fn.now());
    tableBuilder.string("body", [5000]).notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("comments");
};
