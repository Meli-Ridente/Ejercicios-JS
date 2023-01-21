const streamers = [
	{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'},
	{name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'},
	{name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'},
	{name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}
];


	let newArray = streamers.filter(word => {
		if (word.gameMorePlayed.includes('Legends') && word.age > 35){
			return word.gameMorePlayed = word.gameMorePlayed.toUpperCase();
		}else
			return word.gameMorePlayed.includes('Legends');
			
	 })

	 console.log(newArray)
			