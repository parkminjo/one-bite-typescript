// unknown
// 모든 타입의 부모 타입
function unknownExam() {
  let a: unknown = 1;
  let b: unknown = 'a';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운 캐스팅의 상황이기 때문에 허용되지 않음
  // let unknownVar: unknown;

  // let num: number = unknownVar;
  // let str: string = unknownVar;
  // let bool: boolean = unknownVar;
}

// never
// 모든 타입의 자식 타입
// = 모든 집합의 부분 집합 = 공집합
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  // 업 캐스팅의 상황이기 때문에 모두 허용됨
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // never 타입에는 그 어떤 값도 할당할 수 없음
  // 다운 캐스팅의 상황이기 때문에 허용되지 않음
  // 어떤 값도 저장되어서는 안되는 타입일 때 활용하면 좋음
  // let never1: never = 1;
  // let never2: never = 'a';
  // let never3: never = true;
}
