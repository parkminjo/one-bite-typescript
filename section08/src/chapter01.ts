// 인덱스트 엑세스 타입
// 객체
interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

function printAuthorInfo(author: Post['author']) {
  console.log(`${author.name}-${author.id}`);
}

const post: Post = {
  title: '계시글 제목',
  content: '게시글 내용',
  author: {
    id: 1,
    name: '홍길동',
  },
};

// 배열
// []안에 number 타입을 넣으면 하나의 요소만 타입만 가져옴
type PostList = {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}[];

function printAuthorInfo2(author: PostList[number]['author']) {
  console.log(`${author.name}-${author.id}`);
}

const post2: PostList[number] = {
  title: '계시글 제목',
  content: '게시글 내용',
  author: {
    id: 1,
    name: '홍길동',
  },
};

// 튜플
type Tup = [number, string, boolean];

type Tup0 = Tup[0];
type Tup1 = Tup[1];
type Tup2 = Tup[2];
type TupUnion = Tup[number];
