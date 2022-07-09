const app = require("./app");
const dotenv = require("dotenv");
const { ConnectToDatabase } = require("./config/database/database");

dotenv.config({ path: "config/config.env" });

//Connect to DataBase here
ConnectToDatabase();

app.listen(process.env.PORT, () => {
  console.log("Server Listening at : ", process.env.PORT);
});
