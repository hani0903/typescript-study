/**
 * 함수 타입 정의
 */

// 함수를 설명하는 가장 좋은 방법
// 어떤 매개변수를 받고, 어떤 결과값을 반환하는지 정의해야 한다.
function func(a: number, b: number): number {
    return a + b;
}

/**
 * 화살표 함수의 타입을 정의하는 방법
 */
const add = (a: number, b: number): number => a + b;

/**
 * 함수의 매개변수
 */
function introduce(name = '모리', tall?: number) {
    // tall은 선택적 매개변수 (number|undefined)
    // 선택적 매개변수는 반드시 필수 매개변수들 뒤에 존재해야 한다.
    console.log(`name : ${name}`);
}

function getSum(...rest: number[]) {
    return rest.reduce((acc, cur) => (acc += cur));
}

console.log(getSum(1, 2, 3, 4, 5));
