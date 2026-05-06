// access >> modify

class BankAccount {
  readonly userId: number;
  readonly userName: string;
//   private userBalance: number;
protected userBalance: number; // use protector for access in child class

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }
}

class StudentBankAccount extends BankAccount{
    test(){
        this.
    }
}

const mezbaBhaiAccount = new BankAccount(123, "Mezba", 200);

mezbaBhaiAccount.addBalance(100);
mezbaBhaiAccount.addBalance(25);

console.log(mezbaBhaiAccount);
