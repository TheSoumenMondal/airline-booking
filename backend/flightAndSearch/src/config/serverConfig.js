const dotenv = require("dotenv");

dotenv.config();

const serverConfig = {
  PORT: process.env.PORT || 3000,
  SYNC_DB : process.env.SYNC_DB
};

module.exports = serverConfig;
