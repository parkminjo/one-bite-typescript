// Pick<T, K>
// 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
interface Post {
  title: string;
  tags: string[];
  content: string;
  thumbnailURL?: string;
}

type Pick<T, K extends keyof T> = {
  [key in K]: T[key];
};

const legacyPost: Pick<Post, 'title' | 'content'> = {
  title: '옛날 글 제목',
  content: '옛날 글 본문',
};

// Omit<T, K>
// 객체 타입으로부터 특정 프로퍼티를 게저하는 타입
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

const noTitlePost: Omit<Post, 'title'> = {
  content: '',
  tags: [''],
  thumbnailURL: 'https://...',
};

// Record<T, K>
// 객체 타입을 정의할 때 사용함
type Record<K extends keyof any, V> = {
  [key in K]: V;
};

type ThumbnailLegacy = {
  large: {
    url: string;
  };
  medium: {
    url: string;
  };
  small: {
    url: string;
  };
};

type Thumbnail = Record<'large' | 'medium' | 'small', { url: string }>;
