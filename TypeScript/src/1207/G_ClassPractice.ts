{
  //은행 계좌 관리 시스템
  //Account 클래스 생성
  //:속성으로 accountNumber(문자열, public, 계좌번호)와 balance(숫자, private, 잔액)
  //생성자를 사용하여 계좌 번호를 초기화, 초기 잔액은 0으로 설정
  //deposit(amount: number) 메서드를 추가하여 입금 기능을 구현
  //withdraw(amount: number) 메서드를 추가하여 출금 기능을 구현
  //:잔액이 부족할 경우 오류 메시지를 출력
  //getBalance() 메서드를 추가하여 현재 잔액을 출력

  class Account {
    private balance: number;

    constructor(public accountNumber: string) {
      //private으로 설정되어 있기 때문에 클래스 내부에서만 접근 가능
      //초기 잔액을 0으로 설정
      this.balance = 0;
    }

    desposit(amount: number): void {
      this.balance += amount;
      console.log(`Deposit: ${amount}, New Balance: ${this.balance}`);
    }

    withdraw(amount: number): void {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdraw: ${amount}, New Balace: ${this.balance}`);
      } else {
        console.log("not enough balance");
      }
    }

    getBalance(): void {
      console.log(`Current Balance: ${this.balance}`);
    }
  }

  const account = new Account("1234567890");
  account.desposit(1000);
  account.withdraw(500);
  account.getBalance(); //500

  account.withdraw(200);
  account.getBalance(); //300

  account.withdraw(400);
  account.getBalance(); //not enough balance
}
