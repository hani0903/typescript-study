/**
 * 타입 추론
 *
 */
let a = 10;
// number 타입으로 추론

let b = 'hello';
// string 타입으로 추론

function func(message = 'hello') {
    return 'hello'; //함수의 반환값을 string 타입으로 추론
}

let d; // 암묵적 any 타입
d = 10;
d.toFixed();

d = 'hello';
d.toUpperCase();

const num = 10; // number literal 타입으로 추론
const str = 'hello'; // string literal 타입으로 추론

let arr = [1, 'string']; // (string | number)[] 유니온 타입 배열로 추론

let c = {
    id: 1,
    name: '이정환',
    profile: {
        nickname: 'winterlood',
    },
    urls: ['https://winterlood.com'],
};

// id, name, profile, urls 프로퍼티가 있는 객체 타입으로 추론
let { id, name, profile } = c;

let [one, two, three] = [1, 'hello', true];
