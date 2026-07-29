// configs/database.js
import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

// Convertimos el string de la variable de entorno a booleano
const isSSL = process.env.DB_SSL === 'true';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 5432,
    dialect: 'postgres',
    logging: console.log,
    pool: {
      max: 10,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    // Se activa dialectOptions solo si DB_SSL es true
    dialectOptions: isSSL ? {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    } : {}
  }
);

export default sequelize;