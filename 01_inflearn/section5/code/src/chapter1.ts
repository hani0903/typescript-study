/**
 * 인터페이스의 확장
 */
interface Animal {
    name: string;
    age: number;
}

interface Dog extends Animal {
    name: 'dog'; // name 재정의 -> 조건: 재정의하는 타입이 기존 타입의 서브타입이어야 한다.
    isBark: boolean;
}

interface Cat extends Animal {
    isScratch: boolean;
}

interface Dog extends Animal {
    isFly: boolean;
}

interface DogCat extends Dog, Cat {
    name: 'dog';
}
