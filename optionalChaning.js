const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };

let { id, profile: { name, address: { city, zipcode },age } } = user;
console.log(`${id} is Mr:${name} is from ${city} and his age is ${age ?? "is private"}`);
