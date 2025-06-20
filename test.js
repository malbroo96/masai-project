function outerFunction() {
    let message = "Hello from the closure!";
    return function() {
        console.log(message);
    };
}

const inner = outerFunction(); // outerFunction is invoked, returns inner function
inner(); // Logs: Hello from the closure!