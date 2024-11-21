
import Cl_estudiante from "./Cl_estudiante.js";
import Cl_examen from "./Cl_examen.js";
import Dt_estudiantes from "./Dt_estudiante.js";
import Dt_examen from "./Dt_examen.js";

const examen = new Cl_examen(Dt_examen.valor, Dt_examen.minAprueba);

Dt_estudiantes.forEach(estudiante => {
    examen.agregarestud(
        new Cl_estudiante(
            estudiante.nombre,
            estudiante.cedula,
            estudiante.sexo,
            estudiante.nota
        ));
});

let mostrarlista = (salida) => {
    salida.innerHTML =
        `A continuacion seleccione un Comando :<br>
    1) Estudiantes aprobados<br>
    2) Estudiantes reprobados<br>
    3) Mejor nota<br>
    4) Nota promedio<br>
    5) Chicas con nota por encima del promedio<br>
    6) Agregar estudiante<br>
    7) Modificar estudiante<br>
    8) Eliminar estudiante<br>`;
};

let porcentajeAprob = (examen, salida) => {
    let porc = examen.porcentajeAprob();
    salida.innerHTML = `<br>Porcentaje Estudiantes aprobados: ${porc.toFixed(2)}%`;
}

let porcentajeReprob = (examen, salida) => {
    let porc = examen.porcentajeReprob();
    salida.innerHTML = `<br>Porcentaje Estudiantes reprobados: ${porc.toFixed(2)}%`;
}

let mejorNota = (examen, salida) => {
    let mejor = examen.mejorNota();
    salida.innerHTML = `<br>La mejor nota entre los estudiantes fue de: ${mejor}`;
}

let promed = (examen, salida) => {
    let promedio = examen.promed();
    salida.innerHTML = `<br>El promedio alcanzado de las notas fue de: ${promedio.toFixed(2)}`;
}

let chicasprom = (examen, salida) => {
    let chicas = examen.chicasprom();
    salida.innerHTML = `<br>La cantidad de chicas con nota por encima del promedio fue de: ${chicas}`;
}

let agregarestud = (examen, salida) => {
    let nombre = prompt("Por favor ingrese el Nombre a agregar")
    let cedula = prompt("Por favor ingrese la Cedula a agregar")
    let sexo = prompt("Por favor ingrese el Sexo a agregar sea: (M o F)")
    let nota = prompt("Por favor ingrese la Nota a agregar")
    examen.agregarestud(
        new Cl_estudiante(
            nombre,
            cedula,
            sexo,
            nota
        ));
    salida.innerHTML = `<br>El Estudiante se agrego satisfactoriamente:<br>
    <h3>Datos del Estudiante agregado:</h3>
    Nombre: ${nombre}<br>
    Cedula: ${cedula}<br>
    Sexo: ${sexo}<br>
    Nota: ${nota}`;
}

let modificarestud = (examen, salida) => {
    let cedula = prompt("Por favor ingrese la cedula del estudiante que desea modificar")
    let nombre = prompt("Por favor ingrese el nuevo nombre del estudiante (en caso de no modificar dejar en blanco):")
    let sexo = prompt("Por favor ingrese el nuevo sexo del estudiante (en caso de no modificar dejar en blanco):")
    let nota = prompt("Por favor ingrese la nueva nota del estudiante (en caso de no modificar dejar en blanco):")
    examen.modificarestud(cedula, { nombre, sexo, nota });
    salida.innerHTML = `<br>El Estudiante ${cedula} se modifico satisfactoriamente:<br>
    <h3>Datos del Estudiante modificado:</h3>
    Nombre: ${nombre}<br>
    Sexo: ${sexo}<br>
    Nota: ${nota}`;
}

let eliminarestud = (examen, salida) => {
    let cedula = prompt("Por favor ingrese la cedula del estudiante que sera eliminado")
    examen.eliminarestud(cedula);
    salida.innerHTML = `<br><h3>El Estudiante ${cedula} se ha eliminado satisfactoriamente</h3>`;
}

let salidaInicial = document.getElementById("salidaInicial");
let salidaFinal = document.getElementById("salidaFinal");
let lista = document.getElementById("lista");

mostrarlista(salidaInicial);

lista.onclick = () => {
    let opcion = prompt("Por favor ingrese el comando que desea ejecutar");
    switch (opcion) {
        case "1":
            porcentajeAprob(examen, salidaFinal);
            break;
        case "2":
            porcentajeReprob(examen, salidaFinal);
            break;
        case "3":
            mejorNota(examen, salidaFinal);
            break;
        case "4":
            promed(examen, salidaFinal);
            break;
        case "5":
            chicasprom(examen, salidaFinal);
            break;
        case "6":
            agregarestud(examen, salidaFinal);
            break;
        case "7":
            modificarestud(examen, salidaFinal);
            break;
        case "8":
            eliminarestud(examen, salidaFinal);
            break;
        default:
            salidaFinal.innerHTML = `<br>Por favor seleccione un comando valido.`;
    }
};