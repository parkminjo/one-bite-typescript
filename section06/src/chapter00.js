// Class
// 객체를 만들어내는 틀

class Student {
  // 필드
  // 클래스가 만들어낼 객체의 프로퍼티
  name;
  grade;
  age;

  // 생성자
  // 실제로 객체를 만드는 역할을 함
  constructor(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
  }
  // 메서드
  study() {
    console.log('열심히 공부함');
  }
  introduce() {
    console.log(`안녕하세요 ${this.name}입니다.`);
  }
}

// 객체 생성 방법
// 클래스를 이용해서 만든 객체 = 인스턴스
let studentA = new Student('홍길동', 'A', 20);

studentA.introduce();

// Class 상속 방법
class StudentDeveloper extends Student {
  // 필드
  favoriteSkill;

  // 생성자
  constructor(name, grade, age, favoriteSkill) {
    super(name, grade, age); // 부모 Class의 생성자가 호출이 됨
    this.favoriteSkill = favoriteSkill;
  }
  // 메서드
  programming() {
    console.log(`${this.favoriteSkill}로 프로그래밍을 할 수 있습니다.`);
  }
}

const studentDeveloper = new StudentDeveloper('홍길동', 'A', 20, 'React');
studentDeveloper.programming();
