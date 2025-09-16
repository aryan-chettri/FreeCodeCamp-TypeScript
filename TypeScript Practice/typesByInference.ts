let helloWorld : string = "Hello World";

console.log(helloWorld);

export {}


// Defining Types


const user = {

    name: "Hayes",
    id: 0,
};

interface User {

    name: string;
    id: number;
}

const user1: User = {
    name: "Sonny",
    id: 0,
};

interface UserDev {

    username: string;
    email: string;
}

const user3: UserDev = {

    username: "Hayes",
    email: "aryanchettri17@gmail.com",
}

console.log(user3);

