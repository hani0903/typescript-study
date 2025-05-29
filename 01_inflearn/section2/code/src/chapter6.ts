// any
// 특정 변수의 타입을 확실히 모를 때 사용할 수 있는 타입입니다.

let anyVar: any = 10;
anyVar = 'hello';

anyVar = true;
anyVar = {};
anyVar = () => {};

// unknown
let unknownVar: unknown;
unknownVar = '';
unknownVar = 1;
unknownVar = () => {};
