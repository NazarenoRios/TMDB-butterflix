// const Sequelize = require("sequelize");
// db = new Sequelize(process.env.DATABASE_URL, {
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false,
//     },
//   },
// });

// db.authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

// module.exports = db;

const Sequelize = require("sequelize")

const config = require("../config/envs")

const db = new Sequelize(config.DB_HOST, null, null, {
  host: 'localhost',
  dialect: 'postgres',
  logging: false
});

module.exports = db;