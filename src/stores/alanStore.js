import { defineStore } from 'pinia';

export const useMessageStore = defineStore({
    id: 'message',
    state: () => ({
        text: 'Hello from main.js',
        question: ''
    })
});