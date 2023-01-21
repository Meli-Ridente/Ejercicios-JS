const baseUrl = 'https://api.nationalize.io?name=';

const input = document.querySelector('input')
let boton = document.querySelector('button')


const obtenerDatos = () => {
  fetch(baseUrl+input.value)
  .then(datos => datos.json()) 
    .then(json =>{
      console.log('Todo ha ido bien.')
      console.log(json)
    }).catch(error =>{
        console.log('hubo un error.')
        console.log(error)
      })
  }



boton.addEventListener('click', obtenerDatos)