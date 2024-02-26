import {Knex} from 'knex';


export async function seed(knex: Knex): Promise<void> {
    const users = [
        {
            username: "1radwal1",
            create_date: "01.09.1939",
            public_key: "JESTEM KLUCZEM"
        }, {
            username: "paxters",
            create_date: "01.01.0001",
            public_key: "JESTEM KLUCZEM"
        }
    ];

    await knex('users').del();
    await knex('users').insert(users);
}
