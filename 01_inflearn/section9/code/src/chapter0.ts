/**
 * 조건부 타입
 */
type A = number extends string ? string : number; // number가 string을 확장하는 타입인가?

type ObjA = {
    a: number;
};

type ObjB = {
    a: number;
    b: number;
};

type B = ObjB extends ObjA ? number : string;

/**
 * 제네릭과 조건부 타입
 */

type StringNumberSwitch<T> = T extends number ? string : number;
let varA: StringNumberSwitch<number>;

function removeSpaces<T>(text: T): T extends string ? string : undefined;
function removeSpaces<T>(text: any) {
    if (typeof text === 'string') return text.replaceAll(' ', '');

    return undefined;
}

let result = removeSpaces("hi i'm haeun");
