import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('personal_data', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('username').notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('personal_data');
}