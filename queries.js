const pool = require("./dbConfig");

// Función para ejecutar una consulta SQL
async function consultaSQL() {
  // Obtenemos una conexión de la pool
  const client = await pool.connect();

  try {
    // Ejecutamos la consulta SQL
    const result = await client.query("SELECT * FROM estudiantes");

    // Mostramos los resultados
    console.log(result.rows);
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error);
  } finally {
    // Liberamos la conexión
    client.release();
  }
}

// Agregar nuevo estudiante
async function agregarNuevo(rut, nombre, curso, nivel){
  // Obtenemos una conexión de la pool
  const client = await pool.connect();
  try {

    const consulta = "INSERT INTO estudiantes (Rut, Nombre, Curso, Nivel) VALUES ($1, $2, $3, $4)";
    const values = [rut, nombre, curso, nivel]

    await client.query(consulta, values);

    console.log(`Estudiante ${nombre} agregado con éxito.`); 

  } catch (error) {
    console.error("Error al ejecutar la consulta:", error); 
  }
  finally {
    // Liberamos la conexión
    client.release();
  }
}

// Función para insertar un usuario
/* const insertUser = async () => {
  const text = "INSERT INTO users(name, mail) VALUES($1, $2)";
  const values = ["Nombre 4", "email4@email.com"];

  const response = await pool.query(text, values);
  console.log(response);
}; */

// Función para eliminar un usuario
/* const deleteUser = async () => {
  const text = "DELETE FROM users WHERE id = $1";
  const values = [9];

  const response = await pool.query(text, values);
  console.log(response);
}; */

// Función para actualizar un usuario
/* const updateUser = async () => {
  const text = "UPDATE users SET name = $1, mail = $2 WHERE id = $3";
  const values = ["Nombre 5", "email5@email.com"];

  const response = await pool.query(text, values);
  console.log(response);
}; */

module.exports = { consultaSQL, agregarNuevo /* , insertUser, deleteUser, updateUser  */};
