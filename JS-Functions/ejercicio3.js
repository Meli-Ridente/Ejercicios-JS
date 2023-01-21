/*Calcular una suma puede ser tan simple como iterar sobre un array y sumar cada uno de los elementos.
Implemente la función denominada sumNumbers que toma un array de números como argumento y
 devuelve la suma de todos los números de la matriz.*/


 const numbers = [1, 2, 3, 5, 45, 37, 58];

 function sumNumbers(numbs) {
  let aux = 0;
   for(let i=0; i<numbs.length;i++){
      aux = aux + numbs[i]
   }
   console.log('El total es: ' + aux)
   return aux;
 }

 sumNumbers(numbers);