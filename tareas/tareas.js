const fs = require("fs");

let listadoPorHacer = [];

// Esta funcion sobre escribe en el archivo data.json
const guardarDB = () => {
  // Convertimos el array de objeto a string
  let data = JSON.stringify(listadoPorHacer);

  // este comando lo que hace es sobre escribir lo que esta en el documento data.json
  // Quiere decir que se elimina lo que esta y se coloca en el archivo los nuevos datos que le pases
  fs.writeFile("db/data.json", data, (err) => {
    if (err) throw new Error("No se pudo grabar", err);
  });
};

// Funcion para traer todo los objeto que hay en el archivo data.json
const cargarDB = () => {
  try {
    listadoPorHacer = require("../db/data.json");
  } catch (error) {
    listadoPorHacer = [];
  }
};

// Funcion para crear una nueva tarea
const crearTarea = (descripcion) => {
  cargarDB();

  let tarea = {
    descripcion,
    completado: false,
  };

  listadoPorHacer.push(tarea);
  guardarDB();
  // return tarea;
};

// Retorna el array de objeto para ser listado
const getListado = () => {
  cargarDB();
  return listadoPorHacer;
};

const actualizar = (descripcion, completado) => {
  cargarDB();

  let resultado = listadoPorHacer.map((tarea) => {
    return tarea.descripcion == descripcion
      ? { descripcion: tarea.descripcion, completado }
      : tarea;
  });

  listadoPorHacer = resultado;
  guardarDB();
};

let borrar = (descripcion) => {
  cargarDB();
  let resultado = listadoPorHacer.filter(
    (tarea) => tarea.descripcion !== descripcion
  );
  listadoPorHacer = resultado;
  guardarDB();
};

module.exports = { crearTarea, getListado, actualizar, borrar };
