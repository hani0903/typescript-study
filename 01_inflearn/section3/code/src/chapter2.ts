/*
 *  [Unknown 타입]
 *  Unknown 타입은  타입스크립트에 존재하는 모든 타입의 슈퍼 타입이다.
 *  따라서 전체 집합이라고 볼 수 있다.
 */

function unknownExam() {
    let a: unknown = 1;
    let b: unknown = 'hello';
    let c: unknown = true;
    let d: unknown = null;
    let e: unknown = undefined;
}

/*
 *  [never 타입]
 *  never 타입은  타입스크립트에 존재하는 모든 타입의 서브 타입이다.
 *  따라서 모든 타입의 부분집합(공집합)이라고 할 수 있다.
 */

function neverExam() {
    function neverFunc(): never {
        while (true) {}
    }

    /*가능*/
    let num: number = neverFunc();
    let str: string = neverFunc();
    let bool: boolean = neverFunc();

    /*불가능*/
    // let never1: never = 10;
    // let never2: never = "string";
    // let never3: never = true;
}

/*
 *  [void 타입]
 *  void는 중간에 위치한 타입이다.
 */

function voidExam() {
    function voidFunc(): void {
        console.log('hi');
        return undefined; //문제가 되지 않음
    }

    let voidVar: void = undefined;
}

/*
 *  [any 타입]
 *  any 타입은 치트키같은 존재라 타입 계층도를 완벽히 무시한다.
 *  any 타입은 모든 타입의 슈퍼 타입이면서 모든 타입의 서브 타입이다(단 never 제외)
 *  unknown 타입을 다운캐스팅할 수도 있다.
 */

function anyExam() {
    let unknownVar: unknown;
    let anyVar: any;
    let undefinedVar: undefined;
    let neverVar: never;

    anyVar = unknownVar;
    undefinedVar = anyVar;

    // neverVar = anyVar; never 타입은 순수한 공집합같은 타입이기 때문에 어떠한 타입도 다운 캐스팅할 수 없다.
}
