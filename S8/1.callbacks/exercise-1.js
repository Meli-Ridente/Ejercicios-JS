const numbersList = [];

function sum(a, b){
  return a + b;
}

function substract(a,b){
  return a - b;
}

function father(a , b , callback){
    numbersList.push(callback(a,b));
}

father(10, 5, sum)
father(12, 5, sum)
father(1, 5, substract)
father(10, 10, substract)
father(10, 15, sum)
father(5, 5, sum)
father(15, 5, substract)
console.log(numbersList);