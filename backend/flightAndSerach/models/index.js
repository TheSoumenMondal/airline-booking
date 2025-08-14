const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const config = require("../config/config.json");

const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const envConfig = config[env];
const db = {};

const sequelize = envConfig.use_env_variable
  ? new Sequelize(process.env[envConfig.use_env_variable], envConfig)
  : new Sequelize(
      envConfig.database,
      envConfig.username,
      envConfig.password,
      envConfig
    );

const modelFiles = fs
  .readdirSync(__dirname)
  .filter(
    (file) =>
      file.indexOf(".") !== 0 &&
      file !== basename &&
      file.slice(-3) === ".js" &&
      !file.includes(".test.js")
  );

modelFiles.forEach((file) => {
  const modelDefiner = require(path.join(__dirname, file));
  const model = modelDefiner(sequelize, Sequelize.DataTypes);
  db[model.name] = model;
});

Object.values(db).forEach((model) => {
  if (model.associate) {
    model.associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
