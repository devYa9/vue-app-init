import { defineStore } from 'pinia';

export default defineStore('authStore', {
    state: () => ({
        isLoggedIn: false
    }),
});