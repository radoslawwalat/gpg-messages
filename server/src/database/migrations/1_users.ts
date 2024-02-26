import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments('id').unsigned().primary().notNullable();
        table.string('username', 50).notNullable().unique();
        table.string('public_key', 20).notNullable();
        table.string('create_date', 255).nullable();
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
