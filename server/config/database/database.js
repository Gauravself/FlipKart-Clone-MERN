const mongoose = require("mongoose");

//Open connection to DB
mongoose.connection.once("open", () => {
  console.log("Database is Ready");
});

//Handle Error with Database connection
mongoose.connection.on("error", (err) => {
  console.error(err);
});

//Async Funtion to connect to DB
async function ConnectToDatabase() {
  const data = await mongoose.connect(process.env.DB_URI);
  console.log(`Database connecting running at ${data.connection.host}`);
}

module.exports = { ConnectToDatabase };
