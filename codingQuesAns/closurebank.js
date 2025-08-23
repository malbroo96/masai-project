function bankaccount(initalbalance) {
    let balance = initalbalance;
    return {
        deposit: function (amount) {
            if (amount > 0) {
                balance += amount;
                console.log(`deposited: ${amount} and new balance is : ${balance}`);
            }
            return balance;
        },
        withdraw: function (amount) {
            if (amount > balance) {
                console.log(`insufficient balance.current balance is :${balance}`);

                return balance;
            }
            if (amount > 0) {
                balance -= amount;
                console.log(`withdrawn : ${amount} and new balance is : ${balance}`);
            }
            return balance;
        },
        getbalance: function () {
            console.log(`current balance is :${balance}`);
            return balance;
        },
        reset: function () {
             initalbalance = balance;
            console.log(`your current balance is :${balance}`);
            return balance;
        }
    }
}

const myaccount = bankaccount(1000);
myaccount.deposit(500);
myaccount.withdraw(200);
myaccount.getbalance();
myaccount.reset();
myaccount.getbalance();
myaccount.withdraw(2000); // Attempt to withdraw more than the balance
myaccount.deposit(300);
myaccount.getbalance();
myaccount.withdraw(100);
