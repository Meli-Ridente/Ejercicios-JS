const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const lista = document.createElement('ul');
const item = document.createElement('li');

for (let i=0; i<apps.length; i++){
  const item = document.createElement('li')
  item.innerHTML = apps[i]
  document.body.append(item)
}