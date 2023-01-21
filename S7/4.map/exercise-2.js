const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];

const names = users.map(value => {
  if(value.name[0].toUpperCase() == 'A'){
    return 'Anacleto'
  }
  return value.name;
})

console.log(names)