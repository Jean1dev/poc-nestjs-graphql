// require('dotenv-extended').load()

const entitiesPath = process.env.NODE_ENV === 'dev' ? "./src/modules/**/model/*.ts" : "./dist/modules/**/model/*.js"
// const migrationsPath = process.env.NODE_ENV === 'dev' ? './src/database/migrations/*.ts' : 
// const migrationsDir = process.env.NODE_ENV === 'dev' ? './src/database/migrations' : 

console.log('banco de dados executando no host', process.env.HOST_DB || 'localhost')

module.exports = {
    type: 'postgres',
    host: process.env.HOST_DB || 'localhost',
    port: 5432,
    username: process.env.USERNAME_DB || 'jeanfernandes',
    password: process.env.PASSWD_DB || 'admin',
    database: process.env.DB_NAME || 'binno_db',
    entities: [ entitiesPath ],
    migrations: [ './dist/database/migrations/*.js' ],
    cli: {
        'migrationsDir': './dist/database/migrations'
    },
    ssl: process.env.SSL_CONNECTION ? true : false,
    logging: process.env.NODE_ENV === 'dev'
}