/**
 * 제네릭 클래스
 */
class List<T> {
    constructor(private list: T[]) {}

    push(data: T) {
        this.list.push(data);
    }

    pop() {
        return this.list.pop();
    }

    print() {
        console.log(this.list);
    }
}

const numberList = new List<number>([1, 2, 3, 4, 5]);

numberList.pop();
numberList.push(15);
numberList.print();

const stringList = new List<string>(['hello', 'world', 'JavaScript']);

stringList.pop();
stringList.push('typescript');
stringList.print();
