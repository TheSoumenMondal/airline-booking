import app from "./app.js";
import serverConfig from "./config/serverConfig.js";

const PORT = serverConfig.PORT;

app.listen(PORT, () => {
  console.log(`✈️  Flight and Search Server is running on port ${PORT}`);
});

