const mysql = require('mysql2/promise');
const { database : databaseConfig }= require('../config/config.js');

class SceneryService {
  async find() {
    const connection = await mysql.createConnection(databaseConfig);
    const [ rows ] = await connection.execute('select * from scenery');
    return rows;
  }
  async login(account, password) {
    const connection = await mysql.createConnection(databaseConfig);
    const [ rows ] = await connection.execute(`select * from user where account = '${account}' and password = '${password}'`);
    console.log(rows);
    return rows;
  }
  async create(account, password) {
    const connection = await mysql.createConnection(databaseConfig);
    const code = Date.now();
    const regTime = '2020-09-05 18:58:47';
    const [ rows ] = await connection.execute(`insert into user(code, account, password, level, reg_time) VALUES('${code}', '${account}', '${password}', '1', '${regTime}')`);
    console.log(rows);
    return rows;
  }
  async findByCode(userCode) {
    const connection = await mysql.createConnection(databaseConfig);
    const [ rows ] = await connection.execute(`select * from user where code = '${userCode}'`);
    return rows;
  }
}

module.exports = new SceneryService();