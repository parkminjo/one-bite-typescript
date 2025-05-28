// 제네릭 인터페이스
interface KeyPair<K, V> {
  key: K;
  value: V;
}

let keyPair: KeyPair<string, number> = {
  key: 'key',
  value: 0,
};

interface NumberMap {
  [key: string]: number;
}

let numberMap1 = {
  key1: 123,
  key2: -Infinity,
};

// 인덱스 시그니처 + 제네릭
// 좀 더 유연하게 타입을 정의할 수 있음
interface Map<T> {
  [key: string]: T;
}

let stringMap: Map<string> = {
  key: 'abc',
};

let booleanMap: Map<boolean> = {
  key: false,
};

// 제네릭 타입 별칭
// 제네릭 인터페이스와 거의 비슷하다고 생각하면 됨
type Map2<T> = {
  [key: string]: T;
};

let stringMap2: Map2<string> = {
  key: 'abc',
};

// 언제 사용할끼?
// 제네릭 인터페이스 활용 예시
// 유전 관리 프로그램
// 유저 구분 : 학생, 개발자
// 유저의 종류가 많아지는 것을 생각했을 때 제네릭 타입을 이용하는 것이 좋음
interface Student {
  type: 'student';
  school: string;
}

interface Developer {
  type: 'developer';
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  const school = user.profile.school;
  console.log(`${school}에 등교 완료`);
}

// 타입 가드를 해주지 않아도 제네릭으로 인해 타입을 구분하기 때문에
// 바로 오류가 발생함
// goToSchool(developerUser);

const developerUser: User<Developer> = {
  name: '홍길동',
  profile: {
    type: 'developer',
    skill: 'React',
  },
};

const studentUser: User<Student> = {
  name: '홍길순',
  profile: {
    type: 'student',
    school: '서울대학교',
  },
};
