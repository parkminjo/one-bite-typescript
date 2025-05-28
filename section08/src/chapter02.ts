// keyof 연산자

interface Person {
  name: string;
  age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
  return person[key];
}

const person = {
  name: '홍길동',
  age: 20,
};

getPropertyKey(person, 'name');

// typeof 연산자를 이용해서 객체의 타입을 뽑아낼 수 있음
// type Person = typeof person;
function getPropertyKey2(person: Person, key: keyof typeof person) {
  return person[key];
}
