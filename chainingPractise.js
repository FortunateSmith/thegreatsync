const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
	location: {
		country: 'US',
		city: 'New York'
	},
	getAllCarMakes: function(){
		const allCarMakes = [{name: 'Toyota'}, {name: 'Mercedes'}, {name: 'Suzuki'}, { name:'Jeep'}]
		return allCarMakes;
	},
  owners: ['John', 'Sarah'],
};

console.log(car?.getMileage?.());


function checkCountryCode(code) {
    const countryNames = {
      ZA: 'South Africa',
      UAE: 'The United Arab Emirates',
      CN: 'China',
      GH: 'Ghana',
      IN: 'India',
      PH: 'Philippines',
      CA: 'Canada'
    };
  
    const countryName = countryNames[code] || 'Unknown';
    console.log(countryName);
  }

  checkCountryCode("CA");

//   function checkCountryCode(code){
//     if (code === 'ZA') console.log('South Africa')
//     else if (code === 'UAE') console.log('The United Arab Emirates')
//     else if (code === 'CN') console.log('China')
//     else if (code === 'GH') console.log('Ghana')
//     else if (code === 'IN') console.log('India')
//     else if (code === 'PH') console.log('Philippines')
//     else console.log('Unknown')
// }