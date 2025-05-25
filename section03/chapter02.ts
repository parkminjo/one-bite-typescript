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

// void
function voidExam() {
  function voidFunc(): void {
    console.log('Hello');
    return undefined;
  }

  let voidVar: void = undefined;
}

// any
// 타입 계층도를 무시함
// 모든 타입의 슈퍼 타입이자 서브 타입으로 위치할 수 있음
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  // 다운 캐스팅의 상황인데도 any 타입일 때는 허용됨
  // 위험한 타입이기 때문에 사용하는 것을 지양할 필요가 있음
  anyVar = unknownVar;
  undefinedVar = anyVar;

  // never 타입에는 어떤 값도 할당할 수 없기 때문에 any 타입도 할당할 수 없음
  // neverVar = anyVar;
}
