let packages = [
	{
		id: 1,
		weight: 5,
		dimensions: {
			length: 10,
			width: 5,
			height: 8,
		},
		itemShippingMethod: "standard",
	},

	{
		id: 2,
		weight: 12,
		dimensions: {
			length: 15,
			width: 12,
			height: 10,
		},
		itemShippingMethod: "express",
	},

	{
		id: 3,
		weight: 8,
		dimensions: {
			length: 7,
			width: 4,
			height: 6,
		},
		itemShippingMethod: "overnight",
	},

	{
		id: 4,
		weight: 20,
		dimensions: {
			length: 18,
			width: 12,
			height: 14,
		},
		itemShippingMethod: "overnight",
	},

	{
		id: 5,
		weight: 16,
		dimensions: {
			length: 14,
			width: 10,
			height: 12,
		},
		itemShippingMethod: "standard",
	},
];

const shippingMethodPrices = {
	standard: {
		small: 10,
		large: 15,
	},
	express: {
		small: 20,
		large: 25,
	},
	overnight: {
		small: 40,
		large: 45,
	},
};

function calculateShipping(packages, cost) {
	for (let package of packages) {
		// STANDARD RATE
		if (package.itemShippingMethod === "standard" && package.weight <= 10) {
			package.shippingCost = cost.standard.small;
		} else {
			package.shippingCost = cost.standard.large;
		}
		// EXPRESS RATE
		if (package.itemShippingMethod === "express" && package.weight <= 10) {
			package.shippingCost = cost.express.small;
		} else {
			package.shippingCost = cost.express.large;
		}
		// OVERNIGHT RATE
		if (package.itemShippingMethod === "overnight" && package.weight <= 10) {
			package.shippingCost = cost.overnight.small;
		} else {
			package.shippingCost = cost.overnight.large;
		}

		console.log(
			`The shipping cost for package ${package.id} is $${package.shippingCost}`
		);
	}
}

calculateShipping(packages, shippingMethodPrices);
