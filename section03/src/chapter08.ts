// 서로소 유니온 타입
// 교집합이 없는 타입들로만 만든 유니온 타입을 말함
// ex) string 타입과 number 타입

type Admin = {
  tag: 'ADMIN';
  name: string;
  kickCount: number;
};

type Member = {
  tag: 'MEMBER';
  name: string;
  point: number;
};

type Guest = {
  tag: 'GUEST';
  name: string;
  visitCount: number;
};

type User = Admin | Member | Guest;

// 다른 사람이 해당 코드를 보고 조건문 내부만 보고 어떤 타입인지 알아보기 힘듦
// 이때 서로소 유니온 타입을 사용하면 좋음
// function login(user: User) {
//   if ('kickCount' in user) {
//     console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
//   } else if ('point' in user) {
//     console.log(`${user.name}님 현재까지 ${user.point}point 모았습니다.`);
//   } else {
//     console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
//   }
// }

function login(user: User) {
  // if (user.tag === 'ADMIN') {
  //   console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  // } else if (user.tag === 'MEMBER') {
  //   console.log(`${user.name}님 현재까지 ${user.point}point 모았습니다.`);
  // } else {
  //   console.log(`${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다.`);
  // }
  switch (user.tag) {
    case 'ADMIN':
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    case 'MEMBER':
      console.log(`${user.name}님 현재까지 ${user.point}point 모았습니다.`);
      break;
    case 'GUEST':
      console.log(
        `${user.name}님 현재까지 ${user.visitCount}번 방문하셨습니다/`
      );
      break;
  }
}

// tag 프로퍼티를 추가함으로써 서로소 유니온 타입이 됨
// tag 프로퍼티는 string literal 타입이기 때문에 단 하나의 값만 가질 수 있기 때문에, 교집합이 발생할 수 없음

// 또 다른 예시
// 비동기 작업의 결과를 처리하는 객체

type AsyncTask1 = {
  state: 'LOADING' | 'FAILED' | 'SUCCESS';
  error?: {
    message: string;
  };
  response?: {
    data: string;
  };
};

const loading: AsyncTask1 = {
  state: 'LOADING',
};

const failed: AsyncTask1 = {
  state: 'FAILED',
  error: {
    message: '오류 발생 원인은~~',
  },
};

const success: AsyncTask1 = {
  state: 'SUCCESS',
  response: {
    data: '데이터~~',
  },
};

// switch문으로 state에 따라 다르게 처리해도 옵셔널 체이닝을 사용하게 됨
// AsyncTask에서 error와 response를 옵셔널로 걸어놨기 때문에 다시 한 번 체크해줘야됨
// 이럴 때 서로소 유니온 타입을 사용해주면 좋음
function processResult1(task: AsyncTask1) {
  switch (task.state) {
    case 'LOADING':
      console.log('로딩 중..');
      break;
    case 'FAILED':
      console.log('에러 발생: ', task.error?.message);
      break;
    case 'SUCCESS':
      console.log('성공: ', task.response?.data);
      break;
  }
}

// 리팩토링
type LoadingTask = {
  state: 'LOADING';
};

type FailedTask = {
  state: 'FAILED';
  error: {
    message: string;
  };
};

type SuccessTask = {
  state: 'SUCCESS';
  response: {
    data: string;
  };
};

type AsyncTask2 = LoadingTask | FailedTask | SuccessTask;

function processResult2(task: AsyncTask2) {
  switch (task.state) {
    case 'LOADING':
      console.log('로딩 중..');
      break;
    case 'FAILED':
      console.log('에러 발생: ', task.error.message);
      break;
    case 'SUCCESS':
      console.log('성공: ', task.response.data);
      break;
  }
}
