let num ;

const rollDice = (num) => {
  let resultado = Math.floor(Math.random() * num);
  return resultado;
}


console.log('El numero salido en el dado es: ')
console.log(rollDice(num))