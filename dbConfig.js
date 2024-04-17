// Importamos la librería de PostgreSQL
const { Pool } = require("pg");

// Agrega tus datos de conexión 
const usuario_name = "";
const pass_usuario = "";

// Configuración de la base de datos
const config = {
  host: "localhost",
  port: 5432,
  database: "alwaysmusic",
  user: usuario_name,
  password: pass_usuario,
  max: 20,
  min: 2,
  idleTimeoutMillis: 3000,
  connectionTimeoutMillis: 2000,
};

// Instanciamos la clase Pool
const pool = new Pool(config);

module.exports = pool;