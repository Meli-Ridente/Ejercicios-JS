const products = [
{name: 'Gorra de rodilla', sellCount: 10},
{name: 'Pantalón de pana', sellCount: 302},
{name: 'Reloj de papel albal', sellCount: 23},
{name: 'Inpar de zapatos', sellCount: 6}];

const sellCount = () => {
  let total = 0; 
  let prom = 0;
  for (let i=0; i<products.length; i++){
    total += products[i].sellCount;
  }
  prom = total / products.length-1
  return prom;
}

console.log(sellCount())