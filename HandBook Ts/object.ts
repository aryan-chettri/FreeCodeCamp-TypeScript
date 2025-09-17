function printName(obj: 
    {first:string; 
        last?: string
    }){

        if(typeof(obj.last) === 'undefined'){

            console.log(obj.first)

        }
        else{

            console.log(obj.first);
            console.log(obj.last);

        }
     
}

printName({first: "Aryan"});

printName({first:"Arpan", last: "Chettri"});

export {}