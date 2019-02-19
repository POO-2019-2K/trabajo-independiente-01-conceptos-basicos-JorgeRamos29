export default class Empleado{
    constructor(nombre, puesto, domicilio, telefono, correo){
        this._nombre = nombre;
        this._puesto = puesto;
        this._domicilio = domicilio;
        this._telefono = telefono;
        this._correo = correo;
    }

    get nombre(){
        return this._nombre;
    }

    get puesto(){
        return this._puesto;
    }

    get domicilio(){
        return this._domicilio;
    }

    get telefono(){
        return this._telefono;
    }

    get correo(){
        return this._correo;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    set puesto(puesto){
        this._puesto = puesto;
    }

    set domicilio(domicilio){
        this._domicilio = domicilio;
    }
    
    set telefono(telefono){
        this._telefono = telefono;
    }
    
    set correo(correo){
        this._correo = correo;
    }
    
    getInformacion(){
        console.log(`Nombre: ${this._nombre}\nPuesto: ${this._puesto}\nDomicilio: ${this._domicilio}\nTelefono: ${this._telefono}\nCorreo: ${this._correo}`);
    }
}