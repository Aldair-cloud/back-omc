"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize("db_aldair", "admin", "87654321", {
    host: "database-1.czh5ycclkole.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
});
exports.default = db;
//# sourceMappingURL=connection.js.map