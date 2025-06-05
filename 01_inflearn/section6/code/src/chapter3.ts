/**
 * 인터페이스와 클래스
 */

// interface는 무조건 public 필드만 정의할 수 있다.
interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
}

// Character 클래스는 CharacterInterface를 구현한다.
// Interface는 클래스의 설계도 역할을 한다.
class Character implements CharacterInterface {
    constructor(public name: string, public moveSpeed: number) {}

    move(): void {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
