import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import alanBtn from "@alan-ai/alan-sdk-web";
import App from './App.vue'
import router from './router'
import { useMessageStore } from './stores/alanStore.js';


import './assets/main.css'

const app = createApp(App)
app.use(createPinia())
app.use(router)
const messageStore = useMessageStore();
alanBtn({
    key: '267de43e1e45fb3c51eb67213af582d72e956eca572e1d8b807a3e2338fdd0dc/stage',
    onCommand: (commandData) => {
        if (commandData.command === 'go:back') {
            // Call the client code that will react to the received command
        }
    },
    onEvent: (e) => {
        if (e.name === "parsed") {
            console.log('parsed', e.text)
            messageStore.question = e.text
        } else if (e.name === "text") {
            console.log(e.text)
            messageStore.text = e.text
        }
    }
});
app.config.globalProperties.$alanBtnInstance = alanBtn({
    key: '267de43e1e45fb3c51eb67213af582d72e956eca572e1d8b807a3e2338fdd0dc/stage',
});

app.mount('#app')



