import Reservacion from './Reservacion.js';

let reservacion1 = new Reservacion('Jorge', 'jorge@ucol.mx', '20/02/2019', 'Casual', 23, 2100);
reservacion1.getInformacion();
reservacion1.nombre = 'Eduardo';
console.log(reservacion1.nombre);
reservacion1.correo = 'eduardo123@gmail.com';
console.log(reservacion1.correo);
reservacion1.fecha = '27/02/2019';
console.log(reservacion1.fecha);
reservacion1.tipo = 'VIP';
console.log(reservacion1.tipo);
reservacion1.numeroDeMesa = 12;
console.log(reservacion1.numeroDeMesa);
reservacion1.costo = 3600;
console.log(reservacion1.costo);
reservacion1.getInformacion();


