const dotenv = require("dotenv");

dotenv.config();

const SERVER_PORT = process.env.SERVER_PORT || 1234;
const SERVER_HOSTNAME = process.env.SERVER_HOSTNAME || "localhost";

const SERVER = {
    hostname: SERVER_HOSTNAME,
    port: SERVER_PORT,
};

module.exports = db_config = {
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

module.exports = config = {
    server: SERVER,
};
