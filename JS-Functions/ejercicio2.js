/* Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos 
strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */



const avengers = ['Hulk', 'Thor', 'IronMan','Captain W', 'Spiderman', 'Captain A'];



function findLongestWord(param) {
  let aux = param[0];
  
  console.log('el mas alto es por ahora: ' + aux)
  for (let value of param){ 
    if (value.length > aux.length) {
      aux = value;
      if (value.length == aux.length) {
        aux = aux;
      } 
    } 
  } 
  console.log('El valor más alto, aunque sea igual a los siguientes es: '+ aux)
  return aux;
}

findLongestWord(avengers)


