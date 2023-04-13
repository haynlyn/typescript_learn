let Product = function(name, price) {
	this.name = name;
	this.price = price;
}

Product.prototype.toString = function() {
	return `toString: Name: ${this.name}, Price: ${this.price}`;
}

let TaxedProduct = function(name, price, taxRate) {
	/* Product is a function which returns an object.
	 * Use the `call` method on this function to create an object with
	 * properties as specified by the params which adheres to 
	 * Product's shape before assigning other properties.
	 */
	Product.call(this, name, price);
	this.taxRate = taxRate;
}

// TaxedProduct and Product are construction functions, so you have to access
// their prototype objects to link them, rather than the functions themselves.
// It's still a bit confusing, but I'm looking at it differently.
//
// Read up on JS prototypes again.
Object.setPrototypeOf(TaxedProduct.prototype, Product.prototype);

TaxedProduct.prototype.getPriceIncTax = function() {
	return Number(this.price) * this.taxRate;
}

TaxedProduct.prototype.toTaxString = function() {
	// Same as below
	// return `${this.toString()}, Tax: ${this.getPriceIncTax()}`;
	let chainResult = Product.prototype.toString.call(this);
	return `${chainResult}, Tax: ${this.getPriceIncTax()}`;
}

let hat = new TaxedProduct("Hat", 100, 1.2);
let boots = new Product("Boots", 100);

console.log(hat.toString());
console.log(hat.toTaxString());
console.log(boots.toString());
