/**
 * 접근 제어자
 * 영어로 access modifier
 * => public private protected
 * 접근 제어자의 기본값은 public - 아무것도 제어하지 않음
 * private: 클래스 내부에서만 접근할 수 있으며 파생 클래스에서도 접근이 불가하다.
 * protected: 파생 클래스 내부에서는 접근할 수 있다.
 * 생성자의 매개변수 앞에도 접근 제어자를 작성할 수 있다 -> 이 경우 필드 정의를 생략해야 함
 */
class Employee {
    // 필드
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
        this.name = name;
        this.age = age;
        this.position = position;
    }

    work() {
        console.log('일함');
    }
}
