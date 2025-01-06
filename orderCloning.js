// John has a wife called Jane.

// Jane decides to also place an order. Here are the details:

// Order Id: 6335

// Customer Id: 456

// Product Item Id: 3

// Product Item Name: “Product C”

// Product Price: 999

const johnsOrder = {
	orderId: 123456,
	customer: {
		customerId: 789,
		name: "John Doe",
		address: {
			street: "123 Main St",
			city: "New York",
			country: "USA",
		},
	},
	items: [
		{ id: "1", name: "Product A", price: 10 },
		{ id: "2", name: "Product B", price: 20 },
	],
};

console.log(johnsOrder);

function createNewOrder(
	johnsOrder,
	orderId,
	customerId,
	customerName,
	orderArray
) {
	let orderTemplate = {
		...johnsOrder,
		customer: {
			...johnsOrder.customer
		},
		...johnsOrder,
		items: [],
	};

	orderTemplate.orderId = orderId;
	orderTemplate.customer.customerId = customerId;
	orderTemplate.customer.name = customerName;
	orderTemplate.items = [...orderArray];
	// orderArray.forEach((element) => {
	// 	orderTemplate.items.push(element);
	// });

	console.log("New Customer Order: ", orderTemplate);
	// return orderTemplate;
}

createNewOrder(johnsOrder, 6335, 456, "Jane Doe", [
	{ id: 3, name: "Product C", price: 999 },
	{ id: 4, name: "Product D", price: 768 },
]);


// function myFunction(){
// 	console.log('Executed!')
//   }
  
//   console.log(myFunction())
  
//   // And now, we forget the ( )
//   console.log(myFunction)