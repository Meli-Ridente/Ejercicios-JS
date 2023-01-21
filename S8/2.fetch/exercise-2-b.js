const baseUrl = 'https://api.nationalize.io?name=';
const body = document.querySelector('body')
const input = document.querySelector('input')
let boton = document.querySelector('button')

const obtenerDatos = () => {
  let parrafo = document.createElement('p')
  fetch(baseUrl+input.value)
  .then(datos => datos.json()) 
  .then(json =>{
    parrafo.innerText = `El ${input.value}`
    console.log(json) 
    body.append(parrafo)
  }).catch(error =>{
      console.log('hubo un error.')
      console.log(error)
    })
  }

  
boton.addEventListener('click', obtenerDatos)