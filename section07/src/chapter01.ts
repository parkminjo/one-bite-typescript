function func<T>(value: T): T {
  return value;
}

const num = func(10);
const bool = func(true);
const arr = func<[number, number, number]>([1, 2, 3]);
