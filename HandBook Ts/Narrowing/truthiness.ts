function getUsersOnlineMessage(numUsersOnline: number){

    if(numUsersOnline){

        return `There are ${numUsersOnline} online now!`
    }

    return "Nobody's here "
}

console.log(getUsersOnlineMessage(34));

function printAll(strs: string | string[] |null){

    if(strs && typeof strs === "object"){

        for(const s of strs){
            console.log(s);
        }
    }

    else if(typeof strs ==="string"){

        console.log(strs);
    }
}

console.log(printAll(["Aryan", "Developer", "King", "Knight", "Destiny"]))

export {}