import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('address', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('personal_data');
        table.string('street');
        table.string('suite');
        table.string('city');
        table.string('zipcode');
        table.string('lat');
        table.string('lng');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('personal_data');
}