// 타입 별칭
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

let user1: User = {
  id: 1,
  name: '박민조',
  nickname: '감자',
  birth: '2000.12.04',
  bio: '안녕하세요',
  location: '서울',
};

let user2: User = {
  id: 1,
  name: '홍길동',
  nickname: '도적',
  birth: '2002.11.22',
  bio: '안녕하세요',
  location: '부산',
};

// 인덱스 시그니처
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
};
