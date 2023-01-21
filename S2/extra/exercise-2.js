const users = [
  {name: 'Manolo el del bombo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 50},
          rain: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'Mortadelo',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 30},
          shower: {format: 'ogg', volume: 55},
          train: {format: 'mp3', volume: 60},
      }
  },
  {name: 'Super Lopez',
      favoritesSounds: {
          shower: {format: 'mp3', volume: 50},
          train: {format: 'ogg', volume: 60},
          firecamp: {format: 'mp3', volume: 80},
      }
  },
  {name: 'El culebra',
      favoritesSounds: {
          waves: {format: 'mp3', volume: 67},
          wind: {format: 'ogg', volume: 35},
          firecamp: {format: 'mp3', volume: 60},
      }
  },
]

  let cont = 0;
  
  let cant = 0;
  for (let valor of users){
    let sonidos = valor.favoritesSounds;
    for (let value in sonidos){
      cant += sonidos[value].volume;
      cont++;
  }
}

console.log(cant)
console.log(cont)
let prom = cant / cont;
console.log('La media del sonido es: ' + prom)