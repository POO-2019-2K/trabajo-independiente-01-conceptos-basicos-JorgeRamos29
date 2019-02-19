export default class Consulta{
    constructor(nombre, apellidos, edad, problema, fecha, hora){
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
        this._problema = problema;
        this._fecha = fecha;
        this._hora = hora;
    }

    get nombre(){
        return this._nombre;
    }

    get apellidos(){
        return this._apellidos;
    }

    get edad(){
        return this._edad;
    }

    get problema(){
        return this._problema;
    }

    get fecha(){
        return this._fecha;
    }

    get hora(){
        return this._hora;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set apellidos(apellidos){
        this._apellidos = apellidos;
    }

    set edad(edad){
        this._edad = edad;
    }

    set problema(problema){
        this._problema = problema;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }

    set hora(hora){
        this._hora = hora;
    }

    getInformacion(){
        console.log(`Nombre: ${this._nombre}\nApellidos: ${this._apellidos}\nEdad: ${this._edad}\nProblema: ${this._problema}\nFecha: ${this._fecha}\nHora: ${this._hora}`);
    }
}