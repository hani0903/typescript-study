/**
 * 첫 번째 사례
 */
function swap<T1, T2>(a: T1, b: T2) {
    return [b, a];
}

const [a, b] = swap('j', 1);

console.log(a, b);

/**
 * 두 번째 사례
 */
function returnFirstValue<T>(data: [T, ...unknown[]]): T {
    return data[0];
}

console.log(returnFirstValue([1, 2, 3]));
console.log(returnFirstValue(['hello', 2, 3]));

/**
 * 세 번째 사례
 */
function getLength<T extends { length: number }>(data: T): number {
    return data?.length;
}

const len = getLength([1, 2, 3]);
