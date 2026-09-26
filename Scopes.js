let a = 10;
function test() {
  let a = 20;
  console.log(a);
}
test();
console.log(a);



function createBankAccount(startingBalance) {
  let balance = startingBalance;

  return {
    deposit(amount) {
      balance += amount;
    },

    withdraw(amount) {
      balance -= amount;
    },

    getBalance() {
      console.log(balance);
    }
  };
}

const account = createBankAccount(100);

account.deposit(50);
account.withdraw(20);

account.getBalance();

 function  makeMultiplier(factor){
    return function  (number){
   console.log(number * factor);
    }

 }

 const multiplyBy3 = makeMultiplier(3);

multiplyBy3(5);


//for (var i = 0; i < 3; i++) {
  ///setTimeout(() => console.log(i), 100);
///}
// becuse of closure, the value of i is captured by the arrow function, and when the timeout executes,
//  it logs the final value of i, which is 3.

