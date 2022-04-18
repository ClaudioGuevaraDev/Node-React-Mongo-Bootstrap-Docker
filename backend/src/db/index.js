import { connect } from "mongoose";

import { config } from "../config";

(async () => {
  try {
    const db = await connect(
      `mongodb://${config.DATABASE_HOST}:${config.DATABASE_PORT}/${config.DATABASE_NAME}`
    );
    console.log(`Database ${db.connection.name} connected`);
  } catch (error) {
    console.log("Error to connect database");
  }
})();
