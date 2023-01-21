const streamers = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

  let boton = document.querySelector(`[data-function="toShowFilterStreamers"]`)
  let input = document.querySelector(`[data-function="toFilterStreamers"]`)
  boton.addEventListener('click', valor);

  function valor () {
    let valor = input.value.toLowerCase();
    const filtrados = streamers.filter(nombre => nombre.name.toLowerCase().includes(valor))
    console.log(filtrados)
  }