const mostrarListaEstudiantes = (estudiantes) => {
  console.log("lista de estudiantes registrados: ");
  for (let i = 0; i < estudiantes.length; i++) {
    let estudianteActual = estudiantes[i];
    console.log(
      "Nombre: " + estudianteActual.nombre + ", edad: " + estudianteActual.edad
    );
  }
};

module.exports = { mostrarListaEstudiantes };
