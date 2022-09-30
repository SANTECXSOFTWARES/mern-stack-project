require('dotenv').config()

const username = process.env.NAME
const password = process.env.PASSWORD
const database = process.env.DATABASE
const host = process.env.HOST
const node_env = process.env.NODE_ENV

const config ={
  dev:{
    db: {
          username,
          password,
          database,
          host
        }
  },
  test:{},
  prod:{}
}
module.exports = config[node_env]
// {
//   "development": {
//     "username": "root",
//     "password": "password",
//     "database": "schoolmanagementdb",
//     "host": "localhost",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
