const names: String[] = ["Alice", "Bob", "Eve"];

names.forEach(function(s){

    console.log(s.toUpperCase())
});

names.forEach((s)=>{
    
    console.log(s.toLowerCase())
});

export {}