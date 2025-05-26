// 선언 합치기
// 동일한 이름으로 타입을 합칠 수 있음
// 간단한 타입을 합칠 때는 잘 사용하지 않음
// 라이브러리에서 제공하는 타입의 내용이 부족할 때 interface를 사용하면 좋음 = 모듈 보강

interface Person {
  name: string;
}

interface Person {
  age: number;
}

const person: Person = {
  name: '홍길동',
  age: 24,
};
