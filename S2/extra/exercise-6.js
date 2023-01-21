const array = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']

const swap = (index1, index2, array) => {
  let aux = array[index1]
  array[index1] = array[index2]
  array[index2] = aux;
  console.log(array)
 
}


swap(0,1, array)