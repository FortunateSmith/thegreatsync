

const temps = [24, 46, 25, 36, 55, 25, 66, 56, 70]

function mapToNewArray(temperature, index) {
    return `The mapped temp is ${temperature}.`;
}

function loop(temperature, index) {
 console.log(`the temperature at index ${index} is ${temperature}`)
}

temps.forEach(loop);

const temperatureStrings = temps.map((temperature, index) => `The mapped temp is ${temperature} degrees.`);

console.log(temperatureStrings[0]);

const daysBelowThirty = temps.filter((temperature, index) => temperature < 30);

console.log(`There were ${daysBelowThirty.length} days with a temperature below 30 last week. The highs on those days were ${daysBelowThirty[0]}, ${daysBelowThirty[1]} and ${daysBelowThirty[2]}`)

const findTemps = temps.find((temperature, index) => temperature > 60);

findTemps

