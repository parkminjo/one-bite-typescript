// 타입 추론
// 타입스크립트는 자동으로 변수의 타입을 추론해줌
// 자동으로 추론해주는 타입에 일일이 타입을 지정할 필요가 없음 => 코드양 감소

// 타입 넓히기를 통해 범용적인 타입으로 추론해줌

// 일반적인 변수를 선언하고 초기화할 때 자동으로 추론해줌
// 타입스크립트의 추론 기준 = 변수의 초기값
let a = 10;
let b = 'a';
let c = {
  id: 1,
  name: '홍길동',
  profile: {
    nickname: 'HongHong',
  },
};

let { id, name, profile } = c;

let [one, two, three] = [1, 'Hello', true];

function func(message = 'Hello') {
  console.log(message);
  return message;
}

// 암묵적 any 타입
// 아무런 타입을 지정하지 않았기 때문에 여러 타입으로 진화함
let d;
d = 10;
d.toString();

d = 'Hello';
d.toUpperCase();

const num = 10;
