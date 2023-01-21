const url = 'https://akabab.github.io/starwars-api/api'

const bbad = () => {
  fetch(url)
  .then(respuesta => {
    console.log('Todo ha ido bien.')
    console.log(respuesta.json)
  })
  .catch(error =>{
    console.log('hubo un error.')
    console.log(error)
  })
}
bbad()