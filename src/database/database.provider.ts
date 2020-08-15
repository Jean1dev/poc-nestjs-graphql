import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: 'postgres',
            host: process.env.HOST_DB || 'localhost',
            port: 5432,
            username: process.env.USERNAME_DB || 'jeanfernandes',
            password: process.env.PASSWD_DB || 'admin',
            database: process.env.DB_NAME || 'binno_db',
            entities: [
                __dirname + '/../**/*.entity{.ts,.js}',
            ],
            migrations: [ __dirname + '/migrations/*.ts' ],
            ssl: process.env.SSL_CONNECTION ? true : false,
            logging: process.env.NODE_ENV === 'dev'
        }),
    },
];