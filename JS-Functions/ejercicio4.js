//Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función:

const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let prom = 0;
  let suma = 0;
  for (let i=0; i<param.length; i++){
    suma = suma + param[i] ;
    prom = suma / param.length;
  }
  console.log('La suma es: ' + suma)
  console.log('El promedio es: ' + prom)
  return suma, prom;
}

average(numbers)