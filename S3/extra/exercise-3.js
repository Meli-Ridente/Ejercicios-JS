const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let valor = document.querySelector('[data-function="printHere"]')

let  ul = document.createElement('ul');
document.body.append(ul)



for (let i=0; i<cars.length; i++){
  let li = document.createElement('li')
  li.innerHTML = cars[i]
  document.body.append(li)
  valor.append(li)
}