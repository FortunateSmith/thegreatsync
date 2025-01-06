const countries = [
	{
		name: "USA",
		population: 331002651,
		area: 9629091,
		capital: "Washington, D.C.",
		language: "English",
		currency: "United States Dollar",
	},
	{
		name: "Canada",
		population: 37742154,
		area: 9976140,
		capital: "Ottawa",
		language: "English, French",
		currency: "Canadian Dollar",
	},
	{
		name: "Australia",
		population: 25788216,
		area: 7692024,
		capital: "Canberra",
		language: "English",
		currency: "Australian Dollar",
	},
	{
		name: "Germany",
		population: 83149300,
		area: 357022,
		capital: "Berlin",
		language: "German",
		currency: "Euro",
	},
	{
		name: "Japan",
		population: 126476461,
		area: 377972,
		capital: "Tokyo",
		language: "Japanese",
		currency: "Japanese Yen",
	},
	{
		name: "Brazil",
		population: 212559417,
		area: 8515767,
		capital: "Brasília",
		language: "Portuguese",
		currency: "Brazilian Real",
	},
];

let area = [];
let population = [];
let initialValue = 0;
let totalPopulation;
let totalArea;

//   console.log(totalArea)

for (let i = 0; i < countries.length; i++) {
	area.push(countries[i].area);
	population.push(countries[i].population);
}

// console.log(area);
// console.log(population);

totalArea = area.reduce((acc, curr) => acc + curr, initialValue);
totalPopulation = population.reduce((acc, curr) => acc + curr, initialValue);

console.log(
	`The combined total area of listed countries is ${totalArea} square kilometers and the combined total population of listed countries is ${totalPopulation} people.`
);
