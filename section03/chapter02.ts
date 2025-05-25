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
