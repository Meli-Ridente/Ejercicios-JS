//Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la 
//longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(param) {
  let String=0;
  let contNumber=0;
  let contString = 0;
  for (let i=0; i<param.length; i++){
    if (typeof(param[i]) == 'string'){
      String = param[i];
      contString += String.length;
    }else{
      contNumber += param[i];
    } 
  }
  var cantPosiciones = param.length;
  var prom = (contString + contNumber)/cantPosiciones;
  console.log('string totales: ' + contString)
  console.log('Numbers totales: ' + contNumber)
  
  console.log('El promedio total es: ' + prom)
  return contNumber, contString;
}

averageWord(mixedElements)