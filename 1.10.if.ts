/* _____________ 你的代码 _____________ */

type If<C, T, F> = any;

/* _____________ 测试用例 _____________ */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<If<true, 'a', 'b'>, 'a'>>,
  Expect<Equal<If<false, 'a', 2>, 2>>
];

// @ts-expect-error
type error = If<null, 'a', 'b'>;
