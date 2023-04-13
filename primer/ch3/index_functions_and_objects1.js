let hat = {
	name: "Hat",
	_price: 100,
	priceIncTax: 100 * 1.2,

	set price(newPrice) {
		this._price = newPrice;
		this.priceIncTax = this._price * 1.2;
	},

	get price() {
		return this._price;
	},

	/*
	writeDetails: function() {
		console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
	}
	*/
	// Same as above
	writeDetails1() {
		console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`);
	},

	// This is an arrow/lambda/anonymous function, whose `this` isn't bound, unlike normal functions
	writeDetails2: () =>
		console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)

};

let boots = {
	name: "Boots",
	price: "100",

	get priceIncTax() {
		return Number(this.price) * 1.2;
	}
}

console.log("writeDetails1");
hat.writeDetails1();
// the above is a function whose `this` is the object in which it was called
// when used in this manner.
// // if reassigned to another variable, its `this` would be the variable's "object"

// hat.price = 120;
console.log("writeDetails2");
hat.writeDetails2();
// because the above is an arrow function, its `this`
// is bound to global when called in this manner

console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
boots.price = 120;
console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

function writeMessage(message) {
	console.log(`${this.greeting}, ${message}`);
}

greeting = "Hello";

writeMessage("It is sunny today");
writeMessage.call(global, "It is sunny today");
