"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function configure(x) {
    if (typeof (x) === 'object') {
        console.log(x.width);
    }
    else {
        console.log(x);
    }
}
configure({ width: 10000000 });
configure({ width: 20000 });
function liveYoung(x) {
    console.log(x.toFixed());
}
liveYoung(32.3476);
