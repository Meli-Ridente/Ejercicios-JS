
  let texto = 'Mosquito';
  let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolo']

  let valor = 0;
 function findArrayIndex (array, text){
  for (let i=0; i<array.length; i++){
    if(text == array[i]) {
      return i;
    } 
  }
}


const posicion = findArrayIndex(array, texto)
array.splice(posicion,1)
console.log(array)

