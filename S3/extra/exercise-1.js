const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];


let  ul = document.createElement('ul');

for(let i=0; i<countries.length; i++){
  const li = document.createElement('li')
  li.innerHTML = countries[i]
  document.body.append(li)
}