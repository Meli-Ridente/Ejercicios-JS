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

const aprobadosSuma = exams.reduce((acumulador, item) => {
  if(item.score > 5)
    acumulador.score = acumulador.score + item.score;
    return acumulador;
})

console.log(aprobadosSuma.score)