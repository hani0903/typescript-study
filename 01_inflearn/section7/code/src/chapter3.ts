/**
 * 제네릭 인터페이스
 * 제네릭 함수와 똑같이 작성
 * 타입 변수 = 타입 파라미터 = 제네릭 타입 변수 = 제네릭 타입 파라미터
 */
interface KeyPair<K, V> {
    key: K;
    value: V;
}

let keyPair: KeyPair<string, number> = { key: 'hello', value: 6 };

let keyPair2: KeyPair<boolean, string[]> = { key: true, value: ['hello', 'world'] };

/**
 * 인덱스 시그니처
 */
interface NumberMap {
    [key: string]: number;
}

let numberMap1: NumberMap = {
    key: -1231,
    key2: 123123,
};

interface Map<V> {
    [key: string]: V;
}

let stringMap: Map<string> = {
    key: 'value',
};

/**
 * 제네릭 타입 별칭
 */
type Map2<V> = {
    [key: string]: V;
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */

interface Student {
    type: 'student';
    school: string;
}

interface Developer {
    type: 'developer';
    skill: string;
}

interface User<T> {
    name: string;
    profile: T;
}

function goToSchool(user: User<Student>) {
    console.log(`${user.name}은 학교에 갑니다.`);
}

const developerUser: User<Developer> = {
    name: '조하은',
    profile: {
        type: 'developer',
        skill: 'typescript',
    },
};

const studentUser: User<Student> = {
    name: '조하은',
    profile: {
        type: 'student',
        school: '대학교',
    },
};

goToSchool(studentUser);
