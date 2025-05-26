// Interface
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

const person: Person = {
  name: '홍길동',
  age: 25,
  sayHi: () => console.log('hi'),
};
