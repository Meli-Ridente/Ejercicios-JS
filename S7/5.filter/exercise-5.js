const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


//console.log(streamers.filter(word => word.includes('u')))

const incluye = () => {
	let newArray = streamers.filter(word => word.name.includes('u'))
	console.log(newArray)
}

incluye()