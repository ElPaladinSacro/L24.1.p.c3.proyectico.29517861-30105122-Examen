export default class Cl_Examen {
    constructor(valor, minAprueba) {
        this.valor = valor
        this.minAprueba = minAprueba
        this.estudiantes = []
    }

    set valor(valor) {
        this._valor = +valor;
    }
    get valor() {
        return this._valor;
    }

    set minAprueba(minAprueba) {
        this._minAprueba = +minAprueba;
    }

    get minAprueba() {
        return this._minAprueba;
    }

    agregarestud(estudiante) {
        this.estudiantes.push(estudiante)
    }

    eliminarestud(cedula) {
        this.estudiantes = this.estudiantes.filter((estudiante) => estudiante.cedula !== cedula);
    }

    modificarestud(cedula, datos) {
        const estudiante = this.estudiantes.find((estudiante) => estudiante.cedula == cedula);
        if (estudiante) {
            estudiante.nombre = datos.nombre || estudiante.nombre;
            estudiante.sexo = datos.sexo || estudiante.sexo;
            estudiante.nota = datos.nota || estudiante.nota;
        }
    }

    porcentajeAprob() {
        let contAprob = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota >= this.minAprueba) {
                contAprob++
            }
        }
        return (contAprob / this.estudiantes.length) * 100
    }
    porcentajeReprob() {
        let contRepro = 0;
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota < this.minAprueba) {
                contRepro++
            }
        }
        return (contRepro / this.estudiantes.length) * 100
    }
    mejorNota() {
        let mejorNota = 0
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].nota > mejorNota) {
                mejorNota = this.estudiantes[i].nota
            }
        }
        return mejorNota
    }

    promed() {
        let promedio = 0
        for (let i = 0; i < this.estudiantes.length; i++) {
            promedio += this.estudiantes[i].nota
        }
        return promedio / this.estudiantes.length
    }
    chicasprom() {
        const promedio = this.promed();
        let contChicas = 0
        for (let i = 0; i < this.estudiantes.length; i++) {
            if (this.estudiantes[i].sexo == 'F' && this.estudiantes[i].nota > promedio) {
                contChicas++
            }
        }
        return contChicas
    }
}