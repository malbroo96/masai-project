fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => { return res.json(); })
    .then((userList) => {
        userList.forEach((user) => {
            console.log(user.name);
        });
    })
    .catch((error) => {
        console.error("error fetching user name", error);
    });
