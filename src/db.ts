import "dotenv";

import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE_URL,
  {
    define: {
      underscored: true,
    },
  }
);

sequelize.authenticate().then(
  (success) => {
    console.log("Connection has been established successfully.", success);
  },
  (error) => {
    console.log("Unable to connect to the database:", error);
  }
);

export default sequelize;
