// 첫번짜 사례
function swap<T, U>(a: T, b: U) {
  return [b, a];
}

const [a, b] = swap(1, 'string');

// 두번쩨 사례
// 배열의 타입이 다를 때 사용하면 좋음
function returnFirstValue<T>(data: [T, ...unknown[]]) {
  return data[0];
}

let num = returnFirstValue([0, 1, 2]);

let str = returnFirstValue([1, 'Hello', 'Cute']);

// 세번째 사례
// extends를 통해 T의 타입 제한하기
function getLength<T extends { length: number }>(data: T) {
  return data.length;
}
let var1 = getLength([1, 2, 3]);
let var2 = getLength('Hello');
let var3 = getLength({ length: 10 });

// let var4 = getLength(10); length 프로퍼티가 없는 경우는 잘 막아줌

// interface를 생각하면 쉬움
interface A {
  length: number;
}
interface B extends A {}
