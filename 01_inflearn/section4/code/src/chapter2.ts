/**
 * 함수 타입의 호환성
 * 기본타입/객체 타입 호환성과 같이 특정 함수 타입을 다른 타입으로 취급해도 괜찮은지를 판단하는 문법이다.
 * 다음 두 가지 조건이 만족되면 두 함수의 타입이 호환된다고 말할 수 있다.
 * 1. 반환값의 타입이 호환되는가?
 * 2. 매개변수의 타입이 호환되는가?
 */

// 기준 1. 반환값이 호환되는가?
// 업 캐스팅인 경우에만 호환된다고 판단한다.

type A = () => number;
type B = () => 10;

let a: A = () => 10; // 반환값: number
let b: B = () => 10; // 반환값: number literal

a = b; // 업 캐스팅
//b = a; // 다운 캐스팅

// 기준 2. 매개변수가 호환되는가?
// 2-1. 매개변수의 개수가 같을 때
// 다운 캐스팅인 경우에만 호환된다고 판단한다.

type C = (value: number) => void;
type D = (value: 10) => void;

let c: C = (value) => {};
let d: D = (value) => {};

// c = d; // 업캐스팅
d = c;

// 2-2. 매개변수의 개수가 다를 때
// 매개 변수의 개수가 적은 쪽에 많은 쪽을 넣을 수 있음
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => {};
let func2: Func2 = (a) => {};

func1 = func2;
// func2 = func1;
