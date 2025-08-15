const app = require("./app.js");
const serverConfig = require("./config/serverConfig.js");
const db = require("../models/index");

const PORT = serverConfig.PORT;

app.listen(PORT, async () => {
  if (serverConfig.SYNC_DB) {
    await db.sequelize.sync({
      alter: true,
    });
  }

  console.log(`✈️  Flight and Search Server is running on port ${PORT}`);
});
