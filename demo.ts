// Import stylesheets
import './style.css';
import type { Equal, Expect, NotAny } from '@type-challenges/utils';
// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>第一题:Hello World</h1><p> 你需要使得14行不会抛出异常</p>`;

// 期望是一个 string 类型
type HelloWorld = string;
//你需要使得如下这行不会抛出异常
type cases = [Expect<NotAny<HelloWorld>>, Expect<Equal<HelloWorld, string>>];
