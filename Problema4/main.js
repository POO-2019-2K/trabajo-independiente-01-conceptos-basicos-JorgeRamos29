import Consulta from './Consulta.js';

let paciente1 = new Consulta('Jorge Eduardo', 'Ramos Villamar', 18, 'Tos', '25/02/2019', '18:00');

paciente1.getInformacion();

paciente1.nombre = 'Marco';
console.log(paciente1.nombre);
paciente1.apellidos = 'Hernandez';
console.log(paciente1.apellidos);
paciente1.edad = 21;
console.log(paciente1.edad);
paciente1.problema = 'Dolor de cabeza';
console.log(paciente1.problema);
paciente1.fecha = '5/03/2019';
console.log(paciente1.fecha);
paciente1.hora = '16:00';
console.log(paciente1.hora);

paciente1.getInformacion();

console.log('----------------------------------');