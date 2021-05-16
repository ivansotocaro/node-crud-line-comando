const { argv } = require("./config/yargs");
const {
  crearTarea,
  getListado,
  actualizar,
  borrar,
} = require("./tareas/tareas");

// console.log(argv);

let comando = argv._[0];
let descripcion = argv.descripcion;
let completado = argv.completado;

switch (comando) {
  case "crear":
    crearTarea(descripcion);
    break;
  case "listar":
    let tareas = getListado();
    tareas.forEach((tarea) => {
      console.log("==========Por Hacer==========");
      console.log(`❌ ${tarea.descripcion}`);
      console.log(`❌ Estado: ${tarea.completado}`);
      console.log("=============================");
    });
    break;
  case "actualizar":
    actualizar(descripcion, completado);
    break;
  case "borrar":
    borrar(descripcion);
    break;

  default:
    console.log("Comando de es reconocido");

    break;
}
