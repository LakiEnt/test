import { defineStore } from 'pinia';
import type {PropsNameModal} from "~/store/modalStore";



export const usePostStore  = defineStore('postStore', {
    state: () => ({
        posts: [],
        isLoading: false,
    }),
    getters: {
        getPosts: (state) => {
            return state.posts
            }
    },
    actions: {
        setPosts(posts: []) {
            this.posts = posts;
        },
    },
})