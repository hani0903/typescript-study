/**
 * keyof 연산자
 */
interface Person {
    name: string;
    age: number;
}

function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
}

const person: Person = {
    name: '조하은',
    age: 25,
};

console.log(getPropertyKey(person, 'name'));
