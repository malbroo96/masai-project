function createBankAccount(initialBalance) {
    let balance = initialBalance;

    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        withdraw: function(amount) {
            if (amount > balance) {
                console.log("Insufficient funds");
                return balance;
            }
            balance -= amount;
            return balance;
        },
        getBalance: function() {
            return balance;
        }
    };
}


const account = createBankAccount(100);

console.log(account.deposit(50));   
console.log(account.withdraw(30));   
console.log(account.getBalance());  