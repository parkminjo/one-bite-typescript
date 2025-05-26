// 접근 제어자 (Access Modifier)
// 특정 Class에 접근할 수 있는 범위를 설정함
// public private protected

class Employee {
  // 필드
  private name: string;
  public age: number;
  public position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log(`${this.position}로 일합니다.`);
  }
}

const employeeA = new Employee('홍길동', 25, '개발자');
