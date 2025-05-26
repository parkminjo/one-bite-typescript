// 함수 타입의 호환성
// 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가
// 1. 반환값의 타입이 호환되는가
// 2. 매개변수의 타입이 호환되는가

// 1. 반환값의 타입이 호환되는가
// 업 캐스팅의 상황일 때는 가능함
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b;
// b = a; 다운 캐스팅이기 때문에 허용되지 않음

// 2. 매개변수의 타입이 호환되는가
// 2-1. 매개변수의 개수가 같을 때
// 다운 캐스팅일 때 허용됨
type C = (value: number) => void;
type D = (vale: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업 캐스팅인데 허용되지 않음 왜 그럴까? => c 입장에서는 10뿐만 아니라 -20, 30 같은 숫자도 받을 수 있음. 근데 d 입장에서는 10 밖에 받지 못함.
d = c;

type Animal = {
  name: string;
};

type Dog = {
  name: string;
  color: string;
};

let animal = (animal: Animal) => {
  console.log(animal.name);
};
let dog = (dog: Dog) => {
  console.log(dog.name);
  console.log(dog.color);
};

// animal = dog; // dog에 들어있는 color 프로퍼티를 가지고 있지 않기 때문에 오류가 발생함
dog = animal;

let testFunc1 = (animal: Animal) => {
  console.log(animal.name);
  // console.log(animal.color);
};
let testFunc2 = (dog: Dog) => {
  console.log(dog.name);
};

// 2-2. 매개변수의 개수가 다를 때
// 매개변수의 개수가 더 적은 쪽을 할당하는 것은 가능함
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1; // func1의 매개변수의 개수가 더 크기 때문에 허용되지 않음
