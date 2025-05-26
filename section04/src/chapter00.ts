// 함수 타입 정의

// 함수를 설명하는 가장 좋은 방법
// JS : 어떤 매개변수를 받고, 어떤 결괏값을 반환하는지 이야기
// TS : 어떤 타입의 매개변수를 받고, 어떤 타입의 결괏값을 반환하는지 이야기
function add1(a: number, b: number): number {
  return a + b;
}

// 화살표 함수의 타입을 정의하는 방법
const add2 = (a: number, b: number): number => {
  return a + b;
};

// 함수의 매개변수
// 필수 매개변수, 선택적 매개변수
// 필수 매개변수는 선택적 매개변수보다 앞에 위치해야됨
function introduce(name = '홍길동', height?: number) {
  console.log(`name: ${name}`);
  if (typeof height === 'number') {
    console.log(`height: ${height + 10}`);
  }
}

// rest 매개변수
function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((num) => (sum += num));

  return sum;
}

getSum(1, 2, 3);
