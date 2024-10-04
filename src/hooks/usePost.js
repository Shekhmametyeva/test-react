import { useMemo } from "react";

//сортировка постов
export const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if(sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);

    return sortedPosts;
}
    
// сортировка + филтрация
export const usePosts = (posts, sort, query) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toUpperCase().includes(query.toUpperCase()));
    }, [query, sortedPosts]);

    return sortedAndSearchedPosts;
}