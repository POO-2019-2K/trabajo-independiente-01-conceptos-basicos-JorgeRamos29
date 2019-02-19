import Empleado from './Empleado.js';

let trabajador1 = new Empleado('Jorge', 'Programador', 'Armeria, #642', 313555123, 'jorge@ucol.mx');
trabajador1.getInformacion();

trabajador1.nombre = 'Eduardo';
console.log(trabajador1.nombre);
trabajador1.puesto = 'Tester';
console.log(trabajador1.puesto);
trabajador1.domicilio = 'Las palmas, #123';
console.log(trabajador1.domicilio);
trabajador1.telefono = 313555321;
console.log(trabajador1.telefono);
trabajador1.correo = 'eduardo123@gmail.com';
console.log(trabajador1.correo);

trabajador1.getInformacion();