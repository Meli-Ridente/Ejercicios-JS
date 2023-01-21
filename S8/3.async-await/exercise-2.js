// function getCharacters () {
//   fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
// }

// getCharacters();

async function getCharacters () {
  await fetch('https://rickandmortyapi.com/api/character')
    .then(respuesta => {
      console.log('Todo ha ido bien.')
      return respuesta.json()
    })
    .then(json => {
      console.log(json)
    })
    .catch(error =>{
      console.log('hubo un error.')
      console.log(error)
    })
}

getCharacters()