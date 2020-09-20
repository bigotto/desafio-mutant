import Knex from 'knex';

export async function up(knex: Knex) {
    return knex.schema.createTable('contact_info', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().references('id').inTable('personal_data');
        table.string('email');
        table.string('phone');
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('contact_info');
}