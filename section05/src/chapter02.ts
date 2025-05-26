interface Animal {
  name: string;
  age: number;
  color: string;
}

interface Dog extends Animal {
  isBark: boolean;
}

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chicken extends Animal {
  isFly: boolean;
}

interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: '',
  color: '',
  age: 1,
  isBark: false,
  isScratch: false,
};
