const pool = require("./dbConfig");

// Función para ejecutar una consulta SQL
async function consultaSQL() {
  // Obtenemos una conexión de la pool
  const client = await pool.connect();
  const query = {
    rowMode: "array",
    text: "SELECT * FROM estudiantes",
    };   

  try {
    // Ejecutamos la consulta SQL
    const result = await client.query(query);
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
  const query = {
    text: "INSERT INTO estudiantes (Rut, Nombre, Curso, Nivel) VALUES ($1, $2, $3, $4)",
    values: [rut, nombre, curso, nivel],
  };   

  try {
    // Ejecutamos la consulta SQL
    await client.query(query);
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
  const query = {
    text: "UPDATE estudiantes SET nombre = $2, curso = $3, nivel = $4 WHERE rut = $1",
    values: [rut, nombre, curso, nivel],
  };

  try {    
    // Ejecutamos la consulta SQL
    const resultado = await client.query(query);

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
  const query = {
    rowMode: "array",
    text: "SELECT * FROM estudiantes WHERE rut = $1",
    values: [rut],
  };
  try {
    // Ejecutamos la consulta SQL
    const resultado = await client.query(query);
    
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
  const sqlquery = {
    text: "DELETE FROM estudiantes WHERE rut = $1",
    values: [rut],
  };
  try {    
    // Ejecutamos la consulta SQL
    const resultado = await client.query(sqlquery);

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
