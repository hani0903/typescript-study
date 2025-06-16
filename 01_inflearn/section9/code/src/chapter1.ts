/**
 * 분산적인 조건부 타입
 */
type StringNumberSwitch<T> = T extends number ? string : number;

/**
 * 실용적인 예제
 */
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; //number | boolean | never
// 1 단계
// Exclude<number, string> -> number
// Exclude<string, string> -> never
// Exclude<boolean, string> -> boolen

// 2 단계
// union 타입에 never가 있다면, 이는 공집합이기 때문에 never는 빠지게 된다.
// A∪∅=A
// number | never | boolean -> number | boolean

type Extract<T, U> = T extends U ? T : never;

type B = Extract<number | string | boolean, string>;
// 1 단계
// Extract<number, string> -> never
// Extract<string, string> -> string
// Extract<boolean, string> -> never

// 2 단계
// union 타입에 never가 있다면, 이는 공집합이기 때문에 never는 빠지게 된다.
// A∪∅=A
// never | string | never -> string
