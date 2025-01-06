const sales = [
	{
		id: 1,
		customer: "John Smith",
		product: "iPhone 12",
		quantity: 2,
		details: {
			amount: 1200,
			tax: 120,
			discount: 0,
		},
		date: "2023-06-01",
	},
	{
		id: 2,
		customer: "Jane Doe",
		product: "Samsung Galaxy S21",
		quantity: 1,
		details: {
			amount: 900,
			tax: 90,
			discount: 0,
		},
		date: "2023-06-02",
	},
	{
		id: 3,
		customer: "Michael Johnson",
		product: "MacBook Pro",
		quantity: 1,
		details: {
			amount: 2000,
			tax: 200,
			discount: 100,
		},
		date: "2023-06-03",
	},
];

let totalRevenue = 0;
// for (let sale in sales) {
//     totalRevenue += sales[sale].details.amount
// 	// saleDetails = sales[sale].details;
// 	// let grossByLine = Object.values(saleDetails);
// 	// totalRevenue += (grossByLine[0] + grossByLine[1] - grossByLine[2]);
// 	console.log(totalRevenue);
// }

sales.forEach(sale => {
    totalRevenue += sale.details.amount;
    console.log("forEach Loop", totalRevenue);
})