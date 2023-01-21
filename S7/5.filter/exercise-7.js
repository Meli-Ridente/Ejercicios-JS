
const streamers = [
  {name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, 
  {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, 
  {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, 
  {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


const valorInput = document.querySelector('input')
valorInput.addEventListener('input', valor);

function valor () {
  let valor = valorInput.value.toLowerCase();
  const filtrados = streamers.filter(nombre => nombre.name.toLowerCase().includes(valor))
  console.log(filtrados)
}

