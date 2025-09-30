const { DataSource } = require('typeorm');
require('dotenv').config();

const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    synchronize: true, // Automatically creates tables according to entities
    entities: ["./Entities/*.js"],
});

module.exports = AppDataSource;