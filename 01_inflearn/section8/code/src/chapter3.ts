/**
 * 맵드 타입
 */
interface User {
    id: number;
    name: string;
    age: number;
}
type PartialUser = {
    // [] 안에서는 객체의 키가 무엇이 될 수 있는지를 정의한다.
    // : 뒤에는 각 프로퍼티의 벨류가 어떤 타입일지를 정의한다.
    [key in keyof User]?: User[key];
};

type ReadonlyUser = {
    readonly [key in keyof User]: User[key];
};

// 한 명의 유저 정보를 불러오는 기능
function fetchUser(): User {
    return {
        id: 1,
        name: '조하은',
        age: 25,
    };
}

function updateUser(user: User) {
    // 수정하는 기능
}
