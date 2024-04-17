const { consultaSQL, agregarNuevo, editarEstudiante /* , insertUser, deleteUser, updateUser, */ } = require("./queries");

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
else{
    console.log("Error");
}