var p = document.createElement('p')
var insertHere = document.querySelectorAll('div')
console.log(insertHere)
p.innerHTML = 'Voy en medio!'
document.body.insertBefore(p, insertHere[1])