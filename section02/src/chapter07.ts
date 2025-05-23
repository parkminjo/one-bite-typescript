// void
// 공허하다, 아무것도 없다.
// 아무것도 없음을 의마하는 타입
function func1(): string {
  return 'Hello';
}

function func2(): void {
  console.log('Hello');
}

// never
// 존재하지 않는
// 불가능한 타입
function func3(): never {
  while (true) {}
}

function func4(): never {
  throw new Error();
}
