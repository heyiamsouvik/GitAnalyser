require("dotenv").config();

const app = require("./src/app");
const initializeDatabase = require("./src/config/initDb");


(async () => {
  await initializeDatabase();

  app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
  });
})();