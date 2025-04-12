function getAccessMessage(user) {
    return user.role === "admin"? 
                                (user.active ? "Admin Access Granted" : "Admin Access Revoked")
                                : (user.role === "user" ? (user.active ? "User Access Granted" : "User Access Revoked") : "Access Denied");
}


let user1 = { name: "Alice", role: "admin", active: false };
console.log(getAccessMessage(user1)); 

let user2 = { name: "Bob", role: "user", active: true };
console.log(getAccessMessage(user2)); 
let user3 = { name: "Charlie", role: "guest", active: true };
console.log(getAccessMessage(user3)); 