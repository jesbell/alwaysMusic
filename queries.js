const pool = require("./dbConfig");

// Función para ejecutar una consulta SQL
async function consultaSQL() {
  // Obtenemos una conexión de la pool
  const client = await pool.connect();

  try {
    // Ejecutamos la consulta SQL
    const result = await client.query("SELECT * FROM users");

    // Mostramos los resultados
    console.log(result.rows);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
  } finally {
    // Liberamos la conexión
    client.release();
  }
}

// Función para insertar un usuario
const insertUser = async () => {
  const text = "INSERT INTO users(name, mail) VALUES($1, $2)";
  const values = ["Nombre 4", "email4@email.com"];

  const response = await pool.query(text, values);
  console.log(response);
};

// Función para eliminar un usuario
const deleteUser = async () => {
  const text = "DELETE FROM users WHERE id = $1";
  const values = [9];

  const response = await pool.query(text, values);
  console.log(response);
};

// Función para actualizar un usuario
const updateUser = async () => {
  const text = "UPDATE users SET name = $1, mail = $2 WHERE id = $3";
  const values = ["Nombre 5", "email5@email.com"];

  const response = await pool.query(text, values);
  console.log(response);
};

module.exports = { consultaSQL, insertUser, deleteUser, updateUser };
