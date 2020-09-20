import path from 'path';

module.exports = {
    client: 'mysql2',
    connection: {
        host : 'database',
        port: 3306,
        user : 'root',
        password : 'mutant123',
        database : 'desafio_mutant'
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    useNullAsDefault: true
};