// This is a function so that it can receive the baseCost.
function createShippingCostLookup(baseCost) {
    return {
        standard: baseCost,
        express: baseCost + 10,
        overnight: baseCost + 30,
    };
}

// A separate function for calculating the cost, independent of the package and logging logic
function calculateCost(shippingMethod, weight, minimumCost = 10) {
    let baseCost = minimumCost;
    if (weight > 10) baseCost = 15;
    const costLookup = createShippingCostLookup(baseCost);
    return costLookup[shippingMethod];
}

// The primary function for the app - does the logging and calls the calculation function
function printPackageShippingCosts(packages) {
    for (let i = 0; i < packages.length; i++) {
        const package = packages[i];
        const cost = calculateCost(package.shippingMethod, package.weight);
        console.log("Package " + (i + 1) + " shipping cost: $" + cost);
    }
}

// Similar to a constructor function - returns an object for each package
function createPackage(weight, dimensions, shippingMethod) {
    return {
        weight,
        dimensions,
        shippingMethod,
    };
}

// Use an array so we can loop through it later
const packages = [
    createPackage(5, { length: 10, width: 5, height: 8 }, "standard"),
    createPackage(12, { length: 15, width: 12, height: 10 }, "express"),
    createPackage(8, { length: 7, width: 4, height: 6 }, "overnight"),
    createPackage(20, { length: 18, width: 12, height: 14 }, "overnight"),
    createPackage(16, { length: 14, width: 10, height: 12 }, "standard"),
];

// The primary calling function
printPackageShippingCosts(packages);