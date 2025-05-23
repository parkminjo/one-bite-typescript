// 배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ['a', 'b', 'c'];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 'a'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플
// 길이와 타입이 고정된 배열
// 배열 메서드를 사용하면 오류 메시지가 발생하지 않음
let tup1: [number, number] = [1, 2];

// 튜플이 유용하게 사용되는 경우
// 배열 타입의 순서가 중요할 때, 값을 잘못 넣지 않도록 방지할 수 있음
const users: [string, number][] = [
  ['홍길동', 1],
  ['김길동', 2],
  ['박길동', 3],
  ['이길동', 4],
];
