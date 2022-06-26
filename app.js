let accountHolders = [];

let createAccount = (holderName) => {
  let user = {};
  user.name = holderName;
  user.accountNo = 1000 + (accountHolders.length + 1);
  user.balance = 0;
  accountHolders.push(user);
  console.log(user.accountNo);
};

let depositAmount = (accountNumber, amount) => {
  if (amount < 500 && amount > 50000) {
    console.log('Deposit valid amount');
  } else {
    let currentIndex = accountHolders.findIndex(
      (obj, index) => obj.accountNo == accountNumber
    );
    accountHolders[currentIndex].balance += amount;
    console.log(accountHolders[currentIndex].balance);
  }
};

let withdrawAmount = (accountNumber, amount) => {
  if (amount < 1000 && amount > 25000) {
    console.log('Withdrawal amount not valid');
  } else {
    let currentIndex = accountHolders.findIndex(
      (obj, index) => obj.accountNo == accountNumber
    );
    if (accountHolders[currentIndex].balance < amount) {
      console.log('Insufficient balance');
      return;
    }
    accountHolders[currentIndex].balance -= amount;
    console.log(accountHolders[currentIndex].balance);
  }
};

let transferAmount = (sourceAccount, destAccount, amount) => {
  let src = accountHolders.findIndex(
    (obj, index) => obj.accountNo == sourceAccount
  );
  let dest = accountHolders.findIndex(
    (obj, index) => obj.accountNo == destAccount
  );

  if (accountHolders[src].balance < amount) {
    console.log('Insufficient balance');
  } else {
    accountHolders[src].balance -= amount;
    accountHolders[dest].balance += amount;
    console.log('Successful');
  }
};

createAccount('Jack');
createAccount('Harry');
depositAmount(1002, 20000);
depositAmount(1001, 12000);
// withdrawAmount(1001, 7000);
transferAmount(1001, 1002, 8000);
