// TS의 Class
class Employee {
  // 필드
  name: string;
  age: number;
  position: string;

  // 생성자
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  // 메서드
  work() {
    console.log('일하자');
  }
}

const employeeA = new Employee('홍길동', 25, '개발자');

// Typescript에서 Class는 타입으로 사용할 수 있음
const employeeB: Employee = {
  name: '홍길순',
  age: 20,
  position: '기획자',
  work() {
    console.log('일하자');
  },
};

// Class 확장
class ExecutiveOfficer extends Employee {
  officeNumber: number;

  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }
}
