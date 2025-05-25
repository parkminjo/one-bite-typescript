// 타입 단언
// 타입 단언은 언제 필요할까?
// 변수를 빈 객체로 초기화하고 이후에 값을 넣어줄 때
// 미리 지정되지 않은 프로퍼티를 넣을 때

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = '홍길동';
person.age = 25;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: '후추',
  color: '갈색',
  breed: '닥스훈트',
} as Dog;

// 타입 단언 규칙
// A as B
// A가 B의 슈퍼 타입이거나
// A가 B의 서브 타입이어야 함
let num1 = 10 as never;
let num2 = 10 as unknown;

// 다중 단언
// 서로소인 관계의 타입을 지정할 때 사용 가능한 벙법
let num3 = 10 as unknown as string;

// const 단언
// 객체의 프로퍼티를 readonly로 바꿔줌
let num4 = 10 as const;

let cat = {
  name: '야옹이',
  color: '노란색',
} as const;

// Non Null 단언 : !
// 타입스크립트에게 해당 값이 null이거나 undefined가 아닐 것이라고 알려줌
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: '게시글1',
  author: '홍길동',
};

const len: number = post.author!.length;
