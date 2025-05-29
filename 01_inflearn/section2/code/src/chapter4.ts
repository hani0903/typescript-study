// 타입 별칭
type User = { id: number; name: string; nickname: string };

let user1: User = { id: 1, name: '조하은', nickname: 'hani' };
let user2: User = { id: 1, name: '모리', nickname: 'mori' };

// 인덱스 시그니처

type countryCodes = {
    [key: string]: string;
};

let countryCodes: countryCodes = {
    Korea: 'ko',
    UnitedState: 'us',
    UnitedKingdom: 'uk',
};

type countryNumberCodes = {
    [key: string]: number;
};

let countryNumbers: countryNumberCodes = {
    Korea: 410,
    UnitedState: 840,
    UnitedKingdom: 826,
};

let emptyCountryNumbers: countryNumberCodes = {}; // 에러가 발생하지 않는다.
