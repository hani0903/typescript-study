// 배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['one', 'two', 'three'];

let boolArr: Array<boolean> = [true, false, true];

// 배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 'hello'];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
    [1, 2, 3],
    [4, 5],
];

// 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, '2', true];

const users: [string, number][] = [
    ['조하은', 1],
    ['모리', 2],
    ['홍길동', 3],
    // [5, '최아무개'], 'number' 형식은 'string' 형식에 해당합니다.
];
