const mongoose = require("mongoose");

mongoose.connection.once("open", () => {
  console.log("Database is Ready");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function ConnectToDatabase() {
  const data = await mongoose.connect(process.env.DB_URI);
  console.log(`Database connecting running at ${data.connection.host}`);
}

module.exports = { ConnectToDatabase };
