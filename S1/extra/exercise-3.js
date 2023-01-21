const movies = [
  {name: "Your Name", durationInMinutes: 130},
  {name: "Pesadilla antes de navidad", durationInMinutes: 225},
  {name: "Origen", durationInMinutes: 165},
  {name: "El señor de los anillos", durationInMinutes: 967},
  {name: "Solo en casa", durationInMinutes: 214}, 
  {name: "El jardin de las palabras", durationInMinutes: 40}];

  var pequeñas = [];
  var medianas = [];
  var largas = [];


  const duracion = () =>  {
  for (let i=0; i<movies.length; i++){
    if(movies[i].durationInMinutes < 100 ) {
      pequeñas.unshift(movies[i])
    }else if(movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200)
    
    {
      medianas.unshift(movies[i])
    }else if (movies[i].durationInMinutes > 200)
      {
        largas.unshift(movies[i])
      }
  }
  console.log('PELICULAS PEQUEÑAS: ' , pequeñas)
  console.log('PELICULAS MEDIANAS: ' , medianas)
  console.log('PELICULAS LARGAS: ' , largas)
}

duracion()