// 객체
// 객체의 구조를 기준으로 타입을 정함 (구조적 타입 시스템 Property base TS)
// 객체 리터럴 타입을 주로 사용함
// ? : 옵셔널 프로퍼티 = 없어도 되는 속성
// object를 사용하면 property의 타입까지 지정해주지 못하기 떼문에 잘 사용하지 않음
let user: { id?: number; name: string } = {
  id: 1,
  name: '박민조',
};

let dog: { name: string; color: string } = {
  name: '후추',
  color: 'brown',
};

user = {
  name: '홍길동',
};

// readonly = 프로퍼티의 값을 수정하지 못하도록 막아줌
let config: {
  readonly apiKey: string;
} = {
  apiKey: 'MY API KEY',
};
