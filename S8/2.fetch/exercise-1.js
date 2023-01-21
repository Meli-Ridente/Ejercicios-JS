

fetch('https://api.agify.io?name=michael')
  .then(respuesta=>{
    console.log('todo ha ido bien')
    console.log(respuesta.json())
  })
  .catch(respuesta=>{
    console.log('algo fallo.')
    console.log(respuesta)
  })