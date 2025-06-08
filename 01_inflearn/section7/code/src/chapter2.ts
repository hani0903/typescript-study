/**
 * map 메서드
 */
const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2);

function map<T, U>(arr: T[], callback: (item: T) => U): U[] {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }

    return result;
}

console.log(map(arr, (it) => it * 2));
console.log(map(['hello', 'hi', 'mori'], (it) => it.split('')));

/**
 * forEach
 */
function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}

forEach([1, 2, 3], (it) => console.log(it));

/**
 * filter
 */
function filter<T, S>(arr: T[], callback: (item: T) => boolean) {
    const res: T[] = [];

    for (let i = 0; i < arr.length; i++) {
        if (callback(arr[i])) res.push(arr[i]);
    }

    return res;
}

console.log(filter([1, 4, 6, 14, 57, 25, 22, 49], (it) => it < 26));
