/* Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar 
un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'burger',
  'burger',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];


    function removeDuplicates(param) {
      //var cantidad = [];
      for (let i=param.length-1; i>=0; i--){
        let cont = 0;
        for (let j=param.length-1; j>=0; j--){ 
          if(param[i] == param[j]){
            cont++;
            if(cont>1){
              param.splice(i,1)
            }
          }
        } 
      }
      return param;
    }


console.log(removeDuplicates(duplicates))
