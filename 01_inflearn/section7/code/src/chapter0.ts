/**
 * 제네릭
 * 제네릭은 영어로 일반적인 / 포괄적인 이라는 뜻을 갖는다.
 * 제네릭 함수: 모든 타입에 두루두루 사용할 수 있는 범용적인 함수
 */

// 제네릭 함수
function func<T>(value: T): T {
    return value;
}

let num = func(10);
let str = func('hello');
let bool = func(true);

// 타입을 사용자가 명시하도록 하는 방법
let arr = func<[number, number, number]>([1, 2, 3]); //func([1, 2, 3] as [number, number, number])도 가능하긴 함!
