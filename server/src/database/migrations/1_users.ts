import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('users', (table: Knex.TableBuilder) => {
        table.increments('id').unsigned().primary().notNullable();
        table.string('username', 50).notNullable().unique();
        table.string('public_key', 5000).defaultTo("empty");
        table.dateTime('create_date').defaultTo(knex.fn.now());
        table.string('password', 255).notNullable().notNullable();
        table.string('salt', 255).notNullable();
        table.string('session_token', 255).nullable().defaultTo(null);
    });
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable('users');
}
