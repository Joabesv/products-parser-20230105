import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('products', (table) => {
    table.increments('id', { primaryKey: true });
    table.text('status').notNullable();
    table.timestamp('imported_t').defaultTo(knex.fn.now()).notNullable();
    table.text('url').notNullable();
    table.text('creator').notNullable();
    table.timestamp('created_t').defaultTo(knex.fn.now()).notNullable();
    table.timestamp('last_modified_t').defaultTo(knex.fn.now()).notNullable();
    table.text('product_name').notNullable();
    table.text('quantity').notNullable();
    table.text('brands').notNullable();
    table.text('categories').notNullable();
    table.text('labels').notNullable();
    table.text('cities').notNullable();
    table.text('purchase_places').notNullable();
    table.text('stores').notNullable();
    table.text('ingredients_text').notNullable();
    table.text('traces').notNullable();
    table.text('serving_size').notNullable();
    table.float('serving_quantity').notNullable();
    table.integer('nutriscore_score').notNullable();
    table.text('nutriscore_grade').notNullable();
    table.text('main_category').notNullable();
    table.text('image_url').notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('products');
}
