/**
 * 인터페이스
 */

interface IPerson {
    name: string;
    age: number;
    sayHi(): void;
    sayHi(name: string): void;
    sayHello: () => void;
}

const person: IPerson = {
    name: '조하은',
    age: 25,
    sayHi(name?: string) {
        console.log('Hi');
    },
    sayHello() {
        console.log('Hello');
    },
};
