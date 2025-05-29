// 조건부 타입
type A = number extends string ? string : number;

type objA = {
  a: number;
};
type objB = {
  a: number;
  b: number;
};

type B = objB extends objA ? number : string;

// 제네릭과 조건부 타입
// 첫번째 사례
type StringNumberSwitch<T> = T extends number ? string : number;

let varA: StringNumberSwitch<10>;
let varB: StringNumberSwitch<'abc'>;

// 두번째 사례
function removeSpace(text: string) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result = removeSpace('Hello my name is Minjo');
result?.toUpperCase();
// 반환값이 undefined일 수 있기 때문에 여기서 옵셔널 체이닝을 써야함
// 이때 람수에 제네릭을 사용하면 반환값을 정확하게 추론할 수 있음
function removeSpace2<T>(text: T): T extends string ? string : undefined;
function removeSpace2<T>(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let result2 = removeSpace2('Hello my name is Minjo');
let result3 = removeSpace2(undefined);
result2.toUpperCase();
