const exams = [
  {name: 'Abel Cabeza Román', score: 5}, 
  {name: 'Maria Aranda Jimenez', score: 1}, 
  {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
  {name: 'Mercedez Regrera Brito', score: 7},
  {name: 'Pamela Anderson', score: 3},
  {name: 'Enrique Perez Lijó', score: 6},
  {name: 'Pedro Benitez Pacheco', score: 8},
  {name: 'Ayumi Hamasaki', score: 4},
  {name: 'Robert Kiyosaki', score: 2},
  {name: 'Keanu Reeves', score: 10}
];

let cont = 1;

let prom = 0;

const media = exams.reduce((acumulador, item) => {
  acumulador.score = acumulador.score + item.score;
  cont ++;
  prom = acumulador.score / cont;
  return acumulador;
})

console.log('Total suma: ' + media.score);
console.log('Promedio: ' + prom)