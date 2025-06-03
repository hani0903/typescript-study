/**
 * 타입 단언
 *
 */

type Person = {
    name: string;
    age: number;
};

let person = {} as Person;
person.name = '';
person.age = 23;

type Dog = {
    name: string;
    color: string;
};

let dog: Dog = {
    name: '돌돌이',
    color: 'brown',
    breed: '진도',
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 -> 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // never로 추론된다: number 타입은 never의 슈퍼타입이다.
let num2 = 10 as unknown; // unknown 타입으로 추론된다: number 타입은 unknown의 서브타입이다.
//let num3 = 10 as string; // 오류 : number 타입과 string 타입은 슈퍼타입 또는 서브타입의 관계가 아니다. (서로소 집합)
let num3 = 10 as unknown as string; // number -> unknown -> string 순서대로면 가능하다. 근데 좋은 방법은 아님!!!

/**
 * const 단언
 * const 단언은 마치 const로 선언한 것과 동일한 효과를 보도록 만들어주는 단언이다.
 */

let num4 = 10 as const; // number literal 타입 10으로 추론된다.

let cat = {
    name: '야옹이',
    color: 'yellow',
} as const;

/**
 * Non Null 단언
 * 어떤 값이 null또는 undefined가 아니라고 컴파일러에게 알려주는 단언
 */
