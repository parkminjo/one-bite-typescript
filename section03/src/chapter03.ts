// 객체 타입 간의 호환성
// 어떤 객페 타입을 다른 객체 타입으로 취급해도 괜찮은가?
type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: '기린 ',
  color: '노란색',
};

let dog: Dog = {
  name: '후추',
  color: '턱시도',
  breed: '골든 리트리버',
};

// 객체 타입에서는 더 적은 property를 가지고 있는 객체가 부모 타입이 됨
// breed라는 타입을 가지고 있지 않아도, name과 color 타입만 가지고 있으면 Animal 타입에 속하기 때문에
animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: '한 입 크기로 잘라먹는 리액트',
  price: 33000,
  skill: 'react.js',
};

// 초과 프로퍼티 검사
// 변수를 직접 초기화하거나 인수로 전달할 때는 허용되지 않음
// let book2: Book = {
//   name: '한 입 크기로 잘라먹는 리액트',
//   price: 33000,
//   skill: 'react.js',
// };
