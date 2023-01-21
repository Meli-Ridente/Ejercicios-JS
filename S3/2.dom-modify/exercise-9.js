var dentro = document.createElement('p')
const allDiv = document.querySelectorAll('div.fn-insert-here')

for (let i=0; i<allDiv.length; i++){

  allDiv[i].innerHTML = 'Voy dentro'
}

console.log(allDiv)