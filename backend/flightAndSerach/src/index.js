import app from "./app.js";
import serverConfig from "./config/serverConfig.js";

const PORT = serverConfig.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

