const readLineSync = require("readline-sync"); // readline-sync es una libreria para poder usar el "prompt" en node
const { mostrarListaEstudiantes } = require("./lista_estudiantes");

const resgistroEstudiantes = () => {
    console.log("iniciando el registro de estudidentes");

    let cantidadEstudiantes = readLineSync.question(
        "Ingresa cantidad de estudiantes a resgitrar: "
    );

    console.log(
        "La cantidad estudiantes a registrar es de " +
        cantidadEstudiantes +
        " estudiantes"
    );

    let estudiantes = [];

    for (let i = 0; i < cantidadEstudiantes; i++) {
        let nombreEstudiante = readLineSync.question(
            "Ingrese el nombre del estudiante " + i + ": "
        );

        let edad = readLineSync.question(
            "Ingrese la edad del estudiante: " + nombreEstudiante
        );

        let estudiante = {
            nombre: nombreEstudiante,
            edad: edad,
        };
        readLineSync.question;

        estudiantes.push(estudiante);
    }

    return estudiantes;
};

//Ejecutando la funcion  resgistroEstudiantes
let estudiantesRegistrados = resgistroEstudiantes();

mostrarListaEstudiantes(estudiantesRegistrados);
