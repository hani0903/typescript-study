/**
 * 타입 좁히기
 * 조건문 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 말한다.
 */

type Person = {
    name: string;
    age: number;
};

// value => number : toFixed 적용하기
// value => string : toUpperCase
// value => Date : getTime
// value => Person : name은 age살입니다.
function func(value: number | string | null | Date | Person) {
    //typeof 연산자를 통해 타입을 좁히는 표현들을 타입 가드라고 한다.
    if (typeof value === 'number') {
        console.log(value.toFixed());
    } else if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else if (value instanceof Date) {
        // instanceof : 클래스의 인스턴스인지를 확인하는 연산자
        console.log(value.getTime());
    } else if (value && 'age' in value) {
        console.log(`${value.name}은 ${value.age}살 입니다.`);
    }
}
