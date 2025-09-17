"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greet("Aryan", new Date());
