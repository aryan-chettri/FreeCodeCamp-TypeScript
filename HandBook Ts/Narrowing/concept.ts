function padLeft(padding: number | string, input: string) : string {

    throw new Error("Not implemented yet!");
}

function padLeft1(padding: number | string, input: string) : string {

    if(typeof(padding) === "number"){

        return  input;
    }

    return padding + input;
}

console.log(padLeft1(34, "Arogya"));


function display(name: string, num: number){

    for (let index = 0; index < num; index++) {
        console.log(name);     
    }
}

display("arogya", 10);