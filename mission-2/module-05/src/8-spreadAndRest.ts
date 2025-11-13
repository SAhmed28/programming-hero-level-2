//* spread operator = spreads element of an array/object
//* Rest operator = bring back all elements into an array/object


// spread: Array example
const friends = ["school friend 1", "school friend 2"];
const collegeFriends = ["Liza", "Twinkle"];

// If I do a regular array push, we don't want the following result. 
// friends.push(collegeFriends);    // result: ["school friend 1", "school friend 2", ["Liza", "Twinkle"]

//Instead use spread operator.
friends.push(...collegeFriends);
console.log(friends);


// spread: object example
const user = { name: "Ahmed", phoneNo: "437-000-0000"};
const otherInfo = { hobby: "travel", favouriteColor: "Blue"}

const userInfo = {...user, ...otherInfo};
console.log(userInfo);



// Rest operator
// use unlimited number of function parameters without declaring parameters
const sendInvite = (...friends: string[]) => {
    friends.forEach((friend:string) => 
        console.log(`Send invitation to ${friend}`)
    )
};
sendInvite("pintu", "chintu", "pinky", "rumkey");