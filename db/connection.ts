import { Sequelize } from 'sequelize'

const db = new Sequelize("bd_omc", "admin", "12345678", {
  host: "database-aldair.czh5ycclkole.us-east-1.rds.amazonaws.com",
  dialect: "mysql",
  //logging: false
});

export default db