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

    // Ejecutamos la consulta SQL
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

// Editar estudiante
async function editarEstudiante(rut, nombre, curso, nivel){
  // Obtenemos una conexión de la pool
  const client = await pool.connect();
  try {

    const consulta = "UPDATE estudiantes SET nombre = $2, curso = $3, nivel = $4 WHERE rut = $1";
    const values = [rut, nombre, curso, nivel]
    
    // Ejecutamos la consulta SQL
    const resultado = await client.query(consulta, values);

    // mostrar resultados
    if(resultado.rowCount > 0){
      console.log(`Estudiante ${nombre} editado con éxito.`);
    }
    else{
      console.log(`No se encontró un estudiante con el RUT ${rut}.`);
    }
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error); 
  }
  finally {
    // Liberamos la conexión
    client.release();
  }
}

// Consultar estudiante por rut
async function consultarporRut(rut){
  // Obtenemos una conexión de la pool
  const client = await pool.connect();
  try {

    const consulta = "SELECT * FROM estudiantes WHERE rut = $1";
    const values = [rut]

    // Ejecutamos la consulta SQL
    const resultado = await client.query(consulta, values);
    
    // mostramos resultados
    if(resultado.rowCount > 0){
      console.log(resultado.rows);
    }
    else{
      console.log(`No se encontró un estudiante con el RUT ${rut}.`);
    }
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error); 
  }
  finally {
    // Liberamos la conexión
    client.release();
  }
}

// eliminar estudiante por rut
async function eliminarEstudiante(rut){
  // Obtenemos una conexión de la pool
  const client = await pool.connect();
  try {

    const consulta = "DELETE FROM estudiantes WHERE rut = $1";
    const values = [rut]
    
    // Ejecutamos la consulta SQL
    const resultado = await client.query(consulta, values);

    if(resultado.rowCount > 0){
      console.log(`Registro de estudiante con rut ${rut} eliminado` );
    }
    else{
      console.log(`No se encontró un estudiante con el RUT ${rut}.`);
    }
  } catch (error) {
    console.error("Error al ejecutar la consulta:", error); 
  }
  finally {
    // Liberamos la conexión
    client.release();
  }
}


module.exports = { consultaSQL, agregarNuevo, editarEstudiante, consultarporRut, eliminarEstudiante };
