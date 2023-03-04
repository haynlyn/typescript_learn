"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoItem = void 0;
class TodoItem {
    constructor(id, task, complete = false) {
        this.complete = false;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetails() {
        console.log(`${this.id}\t${this.task} ${this.complete
            ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
// the above is normally written as:
//
// export class TodoItem {
//
// 	constructor(public id: number,
// 		    public task: string,
// 		    public complete: boolean = false) {
// 		// no statements required
// 	}
//
// 	printDetails() : void {
// 		console.log(`${this.id}\t${this.task} ${this.complete
// 			? "\t(complete)": ""}`);
// 	}
// }
//
//
