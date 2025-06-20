/**
 * 프로미스 (Promise)
 */
const promise = new Promise<number>((resolve, reject) => {
    setTimeout(() => {
        resolve(20);
    }, 3000);
});

promise.then((response) => {
    console.log(response * 10);
});

/**
 * 프로미스를 반환하는 함수의 타입을 정의
 */
interface Post {
    id: number;
    title: string;
    content: string;
}
// return문 대신 반환 타입을 명시하는게 좀 더 좋음
// 함수의 선언 부분만 보고 함수가 뭘 반환하는지 알 수 있음
function fetchPost(): Promise<Post> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, title: '게시물 제목', content: '게시글 컨텐츠' });
        }, 3000);
    });
}

const postRequest = fetchPost();

postRequest.then((post) => {
    post.id;
});
