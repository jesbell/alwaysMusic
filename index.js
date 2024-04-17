const { consultaSQL/* , insertUser, deleteUser, updateUser, */ } = require("./queries");

const args = process.argv.slice(2);
const accion = args[0];

if (accion == "consulta") {
    consultaSQL();
    
}
else{
    console.log("Error");
}