function padLeft(padding, input) {
    throw new Error("Not implemented yet!");
}
function padLeft1(padding, input) {
    if (typeof (padding) === "number") {
        return input;
    }
    return padding + input;
}
console.log(padLeft1(34, "Arogya"));
function display(name, num) {
    for (var index = 0; index < num; index++) {
        console.log(name);
    }
}
display("arogya", 10);
