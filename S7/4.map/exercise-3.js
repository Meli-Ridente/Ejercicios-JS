const cities = [
  {isVisited:true, name: 'Tokyo'}, 
  {isVisited:false, name: 'Madagascar'},
  {isVisited:true, name: 'Amsterdam'}, 
  {isVisited:false, name: 'Seul'}];

  const names = cities.map(value =>{
    if (value.isVisited == true){
      return value.name = 'Visitado'
    }
    return value.name;
  })

  console.log(names)