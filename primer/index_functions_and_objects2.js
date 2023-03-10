let myObject = {
	greeting: "Hi, there",

	getWriter() {
		return (message) => console.log(`${this.greeting}, ${message}`);
	}
	/*
	writeMessage(message) {
		console.log(`${this.greeting}, ${message}`);
	}
	*/
}

greeting = "Hello";

// Here, getWriter's `this` belongs to myObject
let writer = myObject.getWriter();
writer("It is raining today");

// Here, getWriter's `this` belongs to global, since getWriter was passed as a
// 	value and that's what happens
let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");

/*
** Normal functions either work on a global object or on the object in which they were called.
	That determines their `this` value.
	You can bind an object to a normal function through myFunction.bind(myObject).

** Arrow functions' `this` values is always the closest `this` value.

// These two are equal
myObject.writeMessage("It is sunny today");
myObject.writeMessage.call(myObject, "It is sunny today");

// Assigning an objects method to another variable could change the outcome.
let myFunction = myObject.writeMessage;
myFunction("It is sunny today"); // NOT equal to myObject.writeMessage("It is sunny today");

// Bind the function to an object so that `this` refers to the same thing until explicitly changed
myObject.writeMessage = myObject.writeMessage.bind(myObject)

// Need to reassign
myFunction("It is sunny today"); // Keep the same, erroneous, old effect since it bears the old assignment.
myFunction = myObject.writeMessage;
myFunction("It is sunny today"); // Now it reads "as intended"

*/
