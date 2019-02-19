export default class Reservacion{
    constructor(nombre, correo, fecha, tipo, numeroDeMesa, costo){
        this._nombre = nombre;
        this._correo = correo;
        this._fecha = fecha;
        this._tipo = tipo;
        this._numeroDeMesa = numeroDeMesa;
        this._costo = costo;
    }

    get nombre(){
        return this._nombre;
    }

    get correo(){
        return this._correo;
    }

    get fecha(){
        return this._fecha;
    }

    get tipo(){
        return this._tipo;
    }

    get numeroDeMesa(){
        return this._numeroDeMesa;
    }

    get costo(){
        return this._costo;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set correo(correo){
        this._correo = correo;
    }

    set fecha(fecha){
        this._fecha = fecha;
    }

    set tipo(tipo){
        this._tipo = tipo;
    }

    set numeroDeMesa(numeroDeMesa){
        this._numeroDeMesa = numeroDeMesa;
    }

    set costo(costo){
        this._costo = costo;
    }

    getInformacion(){
        console.log(`Nombre: ${this._nombre}\nCorreo: ${this._correo}\nFecha: ${this._fecha}\nTipo: ${this._tipo}\nNúmero de mesa: ${this._numeroDeMesa}\nCosto: ${this._costo}`);
    }
}