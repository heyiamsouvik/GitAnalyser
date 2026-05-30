require("dotenv").config();

const app = require("./src/app");
const initializeDatabase = require("./src/config/initDb");


const PORT = process.env.PORT || 5000;

(async () => {
  await initializeDatabase();

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})();