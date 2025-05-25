// 타입 좁히기
// 조건문 등을 이용해 넓은 타입에서 좁은 타입으로 타입을 상황에 따라 좁히는 방법

// 조건문과 typeof 연산자를 이용해서 타입을 좁히는 것을 타입 가드라고 부름

function func(value: string | number | Date | null | Person) {
  // value.toFixed();
  // value.toUppercase();

  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
  // A instanceof B
  // A가 B의 인스턴스 객체인가?를 확인함
  // B에는 클래스가 와야됨
  else if (value instanceof Date) {
    console.log(value.getTime());
  } else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살입니다`);
  }
}

type Person = {
  name: string;
  age: number;
};
