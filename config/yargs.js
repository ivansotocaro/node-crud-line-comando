const opts = {
  descripcion: {
    demand: true,
    alias: "d",
  },
};

let { descripcion } = opts;

const argv = require("yargs")
  .command("crear", "Crear una nueva tarea", opts)
  .command("actualizar", "Actualiza el estado completado de la tarea", {
    descripcion,
    completado: {
      alias: "c",
      default: "true",
      desc: "marca como pendiente o completada la tarea",
    },
  })
  .command("borrar", "Se eliminara la tarea deseada", opts)
  .help().argv;

module.exports = { argv };
