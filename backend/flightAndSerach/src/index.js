const app = require("./app.js");
const serverConfig = require("./config/serverConfig.js");
const db = require("./models/index.js");

const PORT = serverConfig.PORT;

app.listen(PORT, () => {
  console.log(db.City);
  console.log(`✈️  Flight and Search Server is running on port ${PORT}`);
});
