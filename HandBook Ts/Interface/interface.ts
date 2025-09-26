interface Animal {
    name: string;
}

interface Bear extends Animal {

    honey: boolean;
}


interface Options{

    width: number;
}

function configure(x: Options | "auto"){

    if(typeof(x) === 'object'){

        console.log(x.width);
    }
    else{

        console.log(x);
    }
}

configure({width: 10000000});

configure({width: 20000});


function liveYoung(x?: number | null){

    console.log(x!.toFixed());
}

liveYoung(32.3476);

export {}