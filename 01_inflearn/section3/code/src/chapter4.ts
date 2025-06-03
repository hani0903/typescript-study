/*
 * 대수 타입
 * -> 여러개의 타입을 합성해서 새롭게 만들어낸 타입
 * 대수 타입에는 합집합 타입과 교집합 타입이 존재한다.
 */

/*
 * 1. 합집합 - Union 타입
 * number 타입과 string 타입은 교집합이 없는 집합이다. -> 이를 또는으로 이어주면 합집합이 된다.
 * '|'를 이용해 추가할 수 있는 타입은 무한대이다.
 */

let a: string | number;
a = 'hello';
a = 1;

let arr: (string | number | boolean)[] = [1, 'hello', true];

type Dog = {
    name: string;
    color: string;
};

type Person = {
    name: string;
    language: string;
};

type Union = Dog | Person;

let union1: Union = { name: '하은', language: 'korean' };
let union2: Union = { name: '모리', color: 'white' };
let union3: Union = { name: '모리', color: 'white', language: 'korean' };
// let union4: Union = { name: '홍길동' };
// 객체들의 유니온 타입은 집합으로 이해하면 쉽다.

/*
 * 2. 교집합 타입 - Intersection 타입
 * 기본 타입을 가지고 Intersection Type을 만들면 웬만하면 never 타입이다.
 */
let variable: number & string; // number와 string의 교집합은 없기 때문에 never 타입이 된다

type Intersection = Dog & Person;

// Dog에 존재하는 프로퍼티와 Person에 존재하는 프로퍼티를 모두 포함해야 한다.
let intersection1: Intersection = { name: '모리', language: 'korean', color: 'white' };
