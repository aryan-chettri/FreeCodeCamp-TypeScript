function printId(id: number | string){
    console.log("Your ID is: " + id);
}

// printId(101);

// printId("202");


function printId1(id: number | string){

    if(typeof(id) === 'string'){

        console.log(id.toUpperCase());
    }

    else{
        console.log(id + 10000)
    }
}

// printId1("theoder23");


function welcomePeople(x: string[] | string){

    if(Array.isArray(x)){
        
        console.log("Hello, " + x.join(" and "));
    }
    else{

        console.log("Welcome traveller "+ x);
    }
}

welcomePeople(["Aryan", "Arpan", "Arogya"]);


export {}