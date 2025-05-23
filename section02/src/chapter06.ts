// any
// 특정 변수의 타입을 확실히 모를 때 사용함
// any를 사용하는 것은 타입스크립트의 이점을 포기하는 것과 마찬가지이기 때문에 사용하지 않는 것이 좋음
// 타입 검사를 프리패스하지만, 코드를 실행할 때 오류가 발생함
let anyVar: any = 10;
anyVar = 'a';

anyVar = true;
anyVar = {};
anyVar = [];
anyVar = () => {};

anyVar.toUppercase(); // 에러가 발생하지 않음
anyVar.toFixed();

let num: number = 10;
num = anyVar;

// unknown
// 특정 변수의 타입을 확실히 모를 때 사용함
// 다른 값에 할당하거나 메서드를 사용하는 것이 불가능함
let unknownVar: unknown;

unknownVar = '';
unknownVar = 1;
unknownVar = () => {};

// unknownVar.toUppercase(); // 에러 발생

if (typeof unknownVar === 'number') {
  num = unknownVar;
}
