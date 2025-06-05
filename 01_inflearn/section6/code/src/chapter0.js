/**
 * 클래스
 */
class Student {
    // 필드
    name;
    grade;
    age;

    // 생성자
    constructor(name, grade, age) {
        this.name = name;
        this.grade = grade;
        this.age = age;
    }

    study() {
        console.log('열심히 공부 함');
    }
    introduce() {
        console.log(`${this.name}이고 ${this.age}살입니다.`);
    }
}

let studentB = new Student('조하은', 'A+', 25);

class StudentDeveloper extends Student {
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill) {
        super(name, grade, age); // 부모 생성자 호출
        this.favoriteSkill = favoriteSkill;
    }

    programming() {
        console.log(`${this.favoriteSkill}로 프로그래밍 함`);
    }
}
