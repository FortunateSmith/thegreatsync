const apiUrl = "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

fetch(apiUrl)
	.then((response) => {
		if (!response.ok) {
			throw new Error("Network error");
		}
		return response.json();
	})
	.then((data) => {
        // data = data.trim();
		// let toString = JSON.parse(data);
        let pokemon = data.results
        // console.log(pokemon)
        for (let poke of pokemon){
            if (poke.name === "charizard"){
            console.log(poke);
            }
        }
	})
	// .then((toString) => {
    //     pokeObject = JSON.parse(toString)
	// 	console.log(typeof pokeObject);
	// })
	.catch((error) => {
		console.error(error, "Catch Error");
	});
