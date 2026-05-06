// encapsulation


class BankAccount {
  readonly userId: number;
  readonly userName: string;
  // private userBalance: number;
  protected userBalance: number; // use protector for access in child class : example of encapsulation

  constructor(userId: number, userName: string, userBalance: number) {
    this.userId = userId;
    this.userName = userName;
    this.userBalance = userBalance;
  }

  // encapsulate this method by private
  private addBalance(balance: number) {
    this.userBalance = this.userBalance + balance;
  }

  calHiddenMethod(balance: number) {
    this.addBalance(balance);
  }
}

class StudentBankAccount extends BankAccount {
  test() {
    this.userBalance;
  }
}

const mezbaBhaiAccount = new BankAccount(123, "Mezba", 200);
