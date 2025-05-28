// 제네릭 클래스
// 생성자의 인수로 전달하는 값을 기준으로 타입 변수의 타입을 추론함
// => 제네릭 인터페이스와 다르게 타입을 명시해줄 필요는 없음
class NumberList {
  constructor(private list: number[]) {}

  push(data: number) {
    this.list.push(data);
  }

  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList = new NumberList([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

// 만약 number 뿐만 아니라 다양한 타입을 받을 수 있는 클래스로 만들고 싶다면?
// => 제네릭을 이용하면 됨

// 제네릭을 어떻게 적용할까?
class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

const numberList2 = new List([1, 2, 3]);
const stringList = new List(['a', 'b', 'c']);
