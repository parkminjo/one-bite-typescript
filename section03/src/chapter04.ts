// 대수 타입
// 여러 개의 타입을 합성해서 새롭게 만들어 낸 타입
// => 합집합 타입과 교집합 타입이 존재함

// 1. 합집합 - Union Type
let a: string | number | boolean;
a = 'A';
a = 123;
a = true;

let arr: (string | number | boolean)[] = [1, 'abc', true];

type Dog1 = {
  name: string;
  color: string;
};

type Person1 = {
  name: string;
  language: string;
};

type Union1 = Dog1 | Person1;

let union1: Union1 = {
  name: '',
  color: '',
};

let union2: Union1 = {
  name: '',
  language: '',
};

let union3: Union1 = {
  name: '',
  color: '',
  language: '',
};

// 그 어떤 곳에도 포함되지 못하는 객체이기 때문에 오류가 발생함
// 집합 그림으로 생각하면 이해하기 쉬움
// let union4: Union1 = {
//   name: '',
// };

// 2. 교집합 - Intersection Type
// 기본 타입에서 사용하면 never 타입이 되는 경우가 많기 때문에
// 객체 타입에서 주로 사용함
let variable: number & string; // never 타입이 됨

type Dog2 = {
  name: string;
  color: string;
};

type Person2 = {
  name: string;
  language: string;
};

type Intersection = Dog2 & Person2;

let intersection: Intersection = {
  name: '',
  color: '',
  language: '',
};
