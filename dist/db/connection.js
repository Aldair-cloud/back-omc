"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("bd_omc", "admin", "12345678", {
    host: "database-aldair.czh5ycclkole.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=connection.js.map