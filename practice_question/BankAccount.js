const getCurrTime = function () {
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "short",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  }).format(new Date());
};

class BankAccount {
  #phone;
  #pan;
  #accountNo;
  #transaction;
  #balance;
  #Type;

  constructor({ owner, phone, pan, nominee, initialAmount }) {
    this.owner = owner;
    this.#phone = phone;
    this.#pan = pan;
    this.nominee = nominee;
    this.#accountNo = phone + Date.now();
    this.#transaction = [
      {
        time: getCurrTime(),
        amount: initialAmount,
        type: "deposite",
      },
    ];
    this.#balance = initialAmount;
    this.#Type = "sivler";
  }
  get accountNo() {
    return this.#accountNo;
  }
  get accountType() {
    this.updateAccountType();
    return this.#Type;
  }
  get accountDetials() {
    return {
      "Owner Name": this.owner,
      "Nominee Name": this.nominee,
      "Account Number": this.#accountNo,
      "Phone Number": this.#phone,
    };
  }

  deposite(depositeAmount) {
    this.#balance += depositeAmount;
    this.#transaction.push({
      time: getCurrTime(),
      amount: depositeAmount,
      type: "deposite",
    });
  }

  withdraw(withdrawAmount) {
    if (withdrawAmount > this.#balance) {
      console.log(`Withdraw of ${withdrawAmount}rs. can't be processed!`);
      console.log("Error : Insufficient Balance");
      return;
    }
    this.#balance -= withdrawAmount;
    this.#transaction.push([
      { time: getCurrTime(), ammount: +withdrawAmount, Type: "withdraw" },
    ]);
  }
  displayStatement() {
    console.log(`\n\n--- TRANSACTION OF ACC NO : ${this.#accountNo}`);
    // this.#transaction.forEach(function ({ time, ammount }) {
    //   const type = ammount < 0 ? "Withdraw" : "Deposit";

    //   console.log(`Time :${time} ---Type:${type} ---Amount:${ammount}`);
    // });
    console.table(this.#transaction);
  }
  calcDeposite() {
    let totalDepositeAmount = 0;
    this.#transaction.forEach(function (trans) {
      if (trans.Type == "deposite") totalDepositeAmount += trans.ammount;
    });
    return totalDepositeAmount;
  }
  updateAccountType() {
    let totalDeposite = this.calcDeposite;
    if (totalDeposite < 50000) this.#Type = "silver";
    if (totalDeposite > 50000 && totalDeposite < 100000) this.#Type = "gold";
    if (totalDeposite > 100000) this.#Type = "platinum";
  }
  approveLoan(desiredAmount) {
    this.updateAccountType();
    let loanAmount = 0;
    if (this.#Type == "silver") loanAmount = 20000;
    if (this.#Type == "gold") loanAmount = 50000;
    if (this.#Type == "platinum") loanAmount = 80000;

    return desiredAmount <= loanAmount;
  }
  getloan(desiredAmount) {
    if (this.approveLoan(desiredAmount)) {
      this.deposite(desiredAmount);
      console.log("Congratulation! your loan has been approved.");
    } else
      console.log(
        `You are not eligible for take loan of amount ${desiredAmount}`
      );
  }
}

const user01 = {
  owner: "fagan parte",
  phone: 1234567890,
  pan: "ASFXGR123",
  nominee: "ramkishore parte",
  initialAmount: 500,
};

const acc01 = new BankAccount(user01);

console.log(acc01.accountType);
acc01.approveLoan(70000);
acc01.getloan(70000);
acc01.withdraw(100);
acc01.deposite(1000);
acc01.displayStatement();
console.log(acc01.calcDeposite());
