// interface와 class
// 라이브러리에서 정교한 코드를 짤 때 종종 사용하는 방법
interface CharacterInterface {
  name: string;
  moveSpeed: number;
  move(): void;
}

class Character implements CharacterInterface {
  constructor(public name: string, public moveSpeed: number) {}

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동`);
  }
}
