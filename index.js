const { consultaSQL, agregarNuevo, editarEstudiante, consultarporRut, eliminarEstudiante } = require("./queries");

// Obtiene los argumentos de la línea de comandos excluyendo los dos primeros
const args = process.argv.slice(2);
// Almacena la primera acción proporcionada como argumento
const accion = args[0];

// Verifica si la acción proporcionada es consulta y ejecuta la función
if (accion == "consulta") {
    consultaSQL();
    
}
else if(args.length === 5){
    //extrae los argumentos para nombre, rut, curso y nivel
    const nombre = args[1];
    const rut = args[2];
    const curso = args[3];
    const nivel = parseInt(args[4], 10);
    // Verifica si la acción es nuevo
    if(accion == "nuevo"){
        agregarNuevo(rut, nombre, curso, nivel);
    }
    // Verifica si la acción es editar
    else if(accion == "editar"){
        editarEstudiante(rut, nombre, curso, nivel);
    }   
}
else if(args.length === 2){
    const rut = args[1];
    if(accion == "rut"){
        consultarporRut(rut);
    }
    else if(accion == "eliminar"){
        eliminarEstudiante(rut);        
    }
}
else{
    console.log("Error");
}