{
  //!직원 관리 시스템
  //Employee 기본 클래스 생성
  //속성: name(문자열)과 id(숫자)
  //생성자를 사용하여 초기화
  //메서드: displayInfo() 메서드 - 직원의 정보를 출력

  //Manager 클래스 생성
  //:Employee 클래스를 확장
  //추가 속성: subordinates(Employee 배열)
  //메서드 addSubordinate(employee: Employee) 메서드 - 하위 직원을 목록에 추가
  //메서드: listSubordinates() - 모든 하위 직원의 정보를 출력

  class Employee {
    // public name: string;
    // public id: number;

    constructor(public name: string, public id: number) {}

    displayInfo(): void {
      console.log(`Name: ${this.name}, ID: ${this.id}`);
    }
  }

  class Manager extends Employee {
    private subordinates: Employee[] = []; //하위 직원 목록

    //부모 클래스의 생성자를 호출
    constructor(name: string, id: number) {
      super(name, id);
    }

    addSubordinate(employee: Employee) {
      this.subordinates.push(employee);
    }

    listSubordinate(): void {
      console.log(`Manager: ${this.name}`);
      this.subordinates.forEach((employee) => employee.displayInfo());
    }
  }
  const manager = new Manager("lsa", 1);
  const emp1 = new Employee("ldk", 2);
  const emp2 = new Employee("ljg", 3);

  manager.addSubordinate(emp1); //lsa 매니저의 하위 직원으로 emp1을 추가
  manager.addSubordinate(emp2); //lsa 매니저의 하위 직원으로 emp2을 추가

  manager.listSubordinate();
}
