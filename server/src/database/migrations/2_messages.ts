import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('messages', (table: Knex.TableBuilder) => {
        table.increments('id').unsigned().primary().notNullable();
        table.integer('user_id').unsigned().notNullable();
        table.string('encrypted_output', 50).notNullable();
        table.foreign('user_id').references('id').inTable('users');
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('messages');
}
