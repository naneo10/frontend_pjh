{
  //!접근 제어자, 제한자(Access Modifiers)

  //캡슐화
  //:클래스의 내부 데이터를 외부에서 직접 접근하는 것을 제한하여
  //:데이터의 안정성을 보장하는 방식

  //?정의
  //:클래스의 내부 데이터를 외부에서 직접 접근한느 것을 제한하여
  //:데이터의 안정성을 보장하기 위한 키워드

  //?종류(3가지)
  //public
  //:어디서든 접근 가능(기본 값)
  //:기본적으로 모든 멤버가 가지고 있는 접근 제어자
  //:프로그램의 어느 곳에서나 접근 가능
  //:접근 제어자가 명시되지 않은 멤버는 모두 'public'으로 설정

  //private
  //:해당 클래스 내부에서만 접근 가능
  //:클래스 외부에서 'private' 멤버에 접근할 경우 오류

  //protected
  //:해당 클래스 및 상속받은 하위 클래스에서만 접근 가능
  //:기본적으로 하위 클래스는 상위 클래스의 멤버에 접근 가능하지만
  //:, 만약 해당 멤버가 'private'이라면 접근 x

  //?사용 목적
  //:클래스의 내부 구현을 숨기거나, 특정 멤버의 접근을 제한할 때 사용
  //:안정성과 유지보수성을 높이기 위함

  //Employee 클래스 정의
  class Employee {
    //멤버 변수 정의(접근 제어자)
    public name: string;
    private salary: number;
    protected department: string;

    constructor(name: string, salary: number, department: string) {
      this.name = name;
      this.salary = salary;
      this.department = department;
    }
    public displayInfo() {
      console.log(`Name: ${this.name}, Department: ${this.department}`);
      console.log(`salary: ${this.salary}`);
    }

    private calculateBonus() {
      return this.salary * 0.1;
    }
  }

  //Employee 클래스 사용 예제(인스턴스화)
  let employee = new Employee("lsa", 50000, "IT");
  console.log(employee.name); //public (외부 접근 가능)
  // console.log(employee.salary); -private (해당 클래스 내부에서만 접근 가능)
  // console.log(employee.department); -protected (해당 클래스 | 상속받은 하위 클래스에서만 접근 가능)

  employee.displayInfo(); //public (외부 접근 가능)
  // employee.calculateBonus(); -private 메소드는 해당 클래스 내부에서만 접근 가능

  //?생성자의 경우 멤버 선언 외에도 생성자의 매개변수 앞에 명시 가능
  //:해당 매개변수는 같은 이름을 속성(멤버 변수)으로 선언, 해당 매게변수의 인자는 암묵적으로 인스턴스에 할당
  class User {
    constructor(public id: string, private password: string) {

    }
  }

  //?위의 User 클래스와 동일
    // class User {
    //   public id: string;
    //   private password: string;

    //   constructor(id: string, password: string) {
    //     this.id = id;
    //     this.password = password;
    //   }
    // }

  let las = new User('lsa', '1234');
  console.log(`${las.id}`);
  // console.log(`${las.password}`); password는 private 속성
}
