/**
 * Pick<T, K>
 * pick: 뽑다, 고르다
 * 객체 타입으로부터 특정 프로퍼티만 딱 골라내는 타입
 */

interface Post {
    title: string;
    tags: string[];
    content: string;
    thumbnailURL?: string;
}

const legacyPost: Pick<Post, 'title' | 'content'> = {
    title: '옛날 글',
    content: '옛날 컨텐츠',
};

type Pick<T, K extends keyof T> = { [key in K]: T[key] };

/**
 * Omit<T, K>
 * omit: 생략하다, 빼다
 * 객체 타입으로부터 특정 프로퍼티를 제거하는 타입
 */

type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
// T : Post, K = 'title'
// Pick < Post, Exclude< 'title' | 'content' | 'tags' | 'thumbnail', 'title'>
// Pick < Post, 'content' | 'tags' | thumbnail'>

const noTitlePost: Omit<Post, 'title'> = {
    content: '',
    tags: [],
    thumbnailURL: '',
};

/**
 * Record<K, V>
 */

type Record<K extends keyof any, V> = { [key in K]: V };

// 동일한 패턴을 갖는 객체 타입을 쉽게 정의!
type Thumbnail = Record<'large' | 'medium' | 'small' | 'watch', { url: string; size: number }>;

let thumbnail: Thumbnail;
