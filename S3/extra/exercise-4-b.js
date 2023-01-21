const countries = [
  {title: 'Random title1', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
  {title: 'Random title2', imgUrl: 'https://picsum.photos/300/200?random=2'},
  {title: 'Random title3', imgUrl: 'https://picsum.photos/300/200?random=3'},
  {title: 'Random title4', imgUrl: 'https://picsum.photos/300/200?random=4'},
  {title: 'Random title5', imgUrl: 'https://picsum.photos/300/200?random=5'}
];

let lista = document.createElement('ul')
document.body.append(lista)


for(let i=0; i<countries.length; i++){
  let li = document.createElement('li')
  let h4 = document.createElement('h4')
  let imagen = document.createElement('img')
  let div = document.createElement('div')
  
  lista.append(li)
  li.append(div)
  
  h4.innerHTML = countries[i].title
  div.append(h4)
  imagen.src = countries[i].imgUrl
  div.append(imagen)
}


const remove = () =>{  
  let valor = document.querySelectorAll('li')
  valor[valor.length-1].remove()
}


let boton = document.querySelector('button').addEventListener('click', remove)

