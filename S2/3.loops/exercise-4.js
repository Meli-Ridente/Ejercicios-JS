const toys = [
  {id: 40, name: 'El gato con Guantes'},
  {id: 5, name: 'Buzz MyYear'}, 
  {id: 11, name: 'Action Woman'}, 
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato con Guantes'},
  {id: 40, name: 'El gato con Guantes'},
  {id: 23, name: 'Barbie Man'}, 
  {id: 40, name: 'El gato felix'}
  ]


  let newArray = []
  for (let value of toys){
    if(!value.name.includes('gato')){
      newArray.push(value)
    }
  }
  console.log(newArray)