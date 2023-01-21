
  let texto = 'Caracol';
  let array = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolo']

 function findArrayIndex (array, text){
    for (let i=0; i<array.length; i++){
      if(text == array[i]) {
        return i;
      } 
    }
 }

 
const variable = findArrayIndex(array, texto)
 if (variable == undefined){
  console.log('No coincide.')
 }else
 console.log(variable)