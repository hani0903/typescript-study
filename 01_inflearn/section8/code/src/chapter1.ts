/**
 * 인덱스드 액세스 타입
 */

interface Post {
    title: string;
    content: string;
    author: {
        id: number;
        name: string;
    };
}

function printAuthorInfo(author: Post['author']) {
    const { id, name } = author;
    console.log(`${id}-${name}`);
}

const post: Post = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
        id: 1,
        name: '조하은',
    },
};

printAuthorInfo(post['author']);
