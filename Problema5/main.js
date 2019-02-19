import Gasto from './Gasto.js';

let alimentos = new Array();
alimentos[0] = 'Frutas';
alimentos[1] = 'Agua';
alimentos[2] = 'Carne';
alimentos[3] = 'Arroz';
alimentos[4] = 'Mantequilla';

let nuevoGasto = new Gasto('9/02/2019', 'Despensa', alimentos, 1200, 'Despensa de la semana');

nuevoGasto.getGasto();