function bankAccount(balance) {
  console.log(`Initial balance in account is ${balance}`);

  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposit   ${amount} : the current balance ${balance}`);
    },

    viewBalance() {
      console.log(`ToTALAMOUNT : the current balance is ${balance}`);
    },

    withdraw(amount) {
      balance = balance - amount;

      console.log(`WITHDRAW   ${amount} : the current balance ${balance}`);
    },
  };
}

const account1 = bankAccount(200);
account1.deposit(500);
account1.withdraw(200);
account1.viewBalance();

// balance is a private variable

// In JavaScript, a private variable inside a factory function is a variable
//  that is not returned or exposed,
//  but still accessible to inner methods through closure.
//   This makes it impossible for outside code to modify it directly.
