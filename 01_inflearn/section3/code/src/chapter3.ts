/*
 * 객체 타입 간의 호환성성
 * -> 어떤 객체 타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
    name: string;
    color: string;
};

type Dog = {
    name: string;
    color: string;
    breed: string;
};

let animal: Animal = { name: '기린', color: 'yellow' };
let dog: Dog = { name: '모리', color: 'white', breed: '말티즈' };

animal = dog;
// dog = animal;

type Book = {
    name: string;
    price: number;
};

type ProgrammingBook = {
    name: string;
    price: number;
    skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
    name: '한 입 크기로 잘라먹는 리액트',
    price: 33000,
    skill: 'reactjs',
};

book = programmingBook;

// let book2: Book = { name: '한 입 크기로 잘라먹는 리액트', price: 33000, skill: 'reactjs' };
