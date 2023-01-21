const userAnwsers = [];

function confirmExample(description){
  const confirmValue = description;
  return confirmValue;
}

function promptExample(description){
  const propmt = description;
    return propmt;
}

function father(description, callback){
  userAnwsers.push(callback(description))
}

let description = 'Hola soy Melissa'
father(userAnwsers, confirmExample)

console.log(userAnwsers)
