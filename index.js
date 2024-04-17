const { consultaSQL, agregarNuevo, editarEstudiante, consultarporRut, eliminarEstudiante } = require("./queries");

const args = process.argv.slice(2);
const accion = args[0];

if (accion == "consulta") {
    consultaSQL();
    
}
else if(args.length === 5){
    const nombre = args[1];
    const rut = args[2];
    const curso = args[3];
    const nivel = parseInt(args[4], 10);
    if(accion == "nuevo"){
        agregarNuevo(rut, nombre, curso, nivel);
    }
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