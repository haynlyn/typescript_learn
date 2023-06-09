let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

/*
function sumPrices(...numbers) {
	return numbers.reduce(function(total, val) {
		return total + (Number.isNaN(Number(val)) ? 0: Number(val));
	}, 0);
}
*/

/*
// Analogous to the above.
function sumPrices(...numbers) {
	return numbers.reduce((total, val) =>
		total + (Number.isNaN(Number(val)) ? 0 : Number(val)));
}
*/

// Analogous to the above.
let sumPrices = (...numbers) => numbers.reduce((total, val) =>
	total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

let totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);
