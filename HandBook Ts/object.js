"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printName(obj) {
    if (typeof (obj.last) === 'undefined') {
        console.log(obj.first);
    }
    else {
        console.log(obj.first);
        console.log(obj.last);
    }
}
printName({ first: "Aryan" });
printName({ first: "Arpan", last: "Chettri" });
