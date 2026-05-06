// getter
// setter

class BankAccount {
  readonly userId: number;
  readonly userName: string;
  private userBalance: number;

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  //   //   set balance
  //   addBalance(balance: number) {
  //     this.userBalance = this.userBalance + balance;
  //   }

  // use set
  set addBalance(amount: number) {
    this.userBalance = this.userBalance + amount;
  }

  //   get balance
  //   getBalance() {
  //     return this.userBalance;
  //   }

  // use get
  get getBlance() {
    return this.userBalance;
  }
}

const mezbaBhaiAccount = new BankAccount(123, "Mezba", 200);

// mezbaBhaiAccount.addBalance(100);
// mezbaBhaiAccount.addBalance(25);

mezbaBhaiAccount.addBalance = 100;
mezbaBhaiAccount.addBalance = 25;

console.log(mezbaBhaiAccount.getBlance);

console.log(mezbaBhaiAccount);
