export default class Gasto{
    constructor(fecha, nombre, alimentos, totalGasto, descripcion){
        this._fecha = fecha;
        this._nombre = nombre;
        this._alimentos = alimentos;
        this._totalGasto = totalGasto;
        this._descripcion = descripcion;
    }

    get fecha(){
        return this._fecha;
    }

    get nombre(){
        return this._nombre;
    }

    get alimentos(){
        return this._alimentos;
    }

    get totalGasto(){
        return this._totalGasto;
    }

    get descripcion(){
        return this._descripcion;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set alimentos(alimentos){
        this._alimentos = alimentos;
    }

    set totalGasto(totalGasto){
        this._totalGasto = totalGasto;
    }

    set descripcion(descripcion){
        this._descripcion = descripcion;
    }

    getGasto(){
        console.log(`Fecha: ${this._fecha}\nNombre: ${this._nombre}\nAlimentos: ${this._alimentos}\nTotal gastado: ${this._totalGasto}\nDescripcion: ${this._descripcion}`);
    }
}