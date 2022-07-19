import { Sequelize } from 'sequelize'

const db = new Sequelize("db_aldair", "admin", "87654321", {
  host: "database-1.czh5ycclkole.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  //logging: false
});

export default db