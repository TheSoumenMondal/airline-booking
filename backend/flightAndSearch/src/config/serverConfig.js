const dotenv = require("dotenv");

dotenv.config();

const serverConfig = {
  PORT: process.env.PORT || 3000,
  DB_URL: process.env.DB_URL,
};

module.exports = serverConfig;
