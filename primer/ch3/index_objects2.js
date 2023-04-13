let hat = {
	name: "Hat",
	price: 100
};

let boots = {
	name: "Boots",
	price: "100"
};

// original object
console.log(`Original: ${JSON.stringify(hat)}`);

// added property
let additionalProperties = {...hat, discounted: true};
console.log(`Additional: ${JSON.stringify(additionalProperties)}`);

// loads `hat` then overwrites property with new value
let replacedProperties1 = { ...hat, price: 10};
console.log(`Replaced1: ${JSON.stringify(replacedProperties1)}`);

// loads `price` then overwrites it with properties from `hat`
let replacedProperties2 = { price: 10, ...hat};
console.log(`Replaced2: ${JSON.stringify(replacedProperties2)}`);

// assigns the `price` the first property of `hat` and the rest to `someProperties`
let { price, ...someProperties } = hat;
console.log(`Selected: ${JSON.stringify(someProperties)}`);
