import knex from 'knex';

const db = knex({
    client: 'mysql2',
    connection: {
      host : 'database',
      port: 3306,
      user : 'root',
      password : 'mutant123',
      database : 'desafio_mutant'
  }
});

export default db;