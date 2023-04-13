let hat = {
	name: "Hat",
	price: 100
};

let boots = {
	name: "Boots",
	price: "100"
};

let gloves = {
	productName: "Gloves",
	price: "40"
}

gloves.name = gloves.productName;
delete gloves.productName;
gloves.price = 20;

let propertyCheck = hat.price ?? 0;
// let objectAndPropertyCheck = (hat ?? {}).price ?? 0;
// Same as above - if `hat` is null or undefined, then it'll be coerced to an empty object, whose
// `price` attribute will be coerced to 0
let objectAndPropertyCheck = hat?.price ?? 0;
console.log(`Checks: ${propertyCheck}, ${objectAndPropertyCheck}`);

/* let sumPrices = (...numbers) => numbers.reduce((total, val) =>
	total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

let totalPrice = sumPrices(hat.price, boots.price, gloves.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
*/
