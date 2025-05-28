// Promise
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 3000);
});

// 비동기 결괏값의 타입은 unknown으로 추론됨
// Typescript는 Promise의 결괏값을 자동으로 추론해주지 못함
// promise.then((response) => console.log(response * 20));
// => 이때 제네릭을 사용하면 됨

const promise2 = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    // resolve(20);
    reject('~~때문에 실패');
  }, 3000);
});

promise2.then((response) => console.log(response * 20));

// 제네릭 타입은 reject 결괏값의 타입은 정의할 수 있지만, resolve 결괏값의 타입은 정의할 수 없음
promise2.catch((error) => {
  if (typeof error === 'string') {
    console.log(error);
  }
});

// Promise를 반환하는 함수의 타입을 정의
interface Post {
  id: number;
  title: string;
  content: string;
}

function fetchPost(): Promise<Post> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1, title: '제목입니다', content: '내용입니다' });
    }, 2000);
  });
}

const postRequest = fetchPost();
postRequest.then((post) => {
  console.log(post.id);
  console.log(post.title);
  console.log(post.content);
});
