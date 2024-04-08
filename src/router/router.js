import { createRouter, createWebHashHistory } from 'vue-router';
import GamePage from '@/pages/GamePage.vue';

const routes = [
    {
        path: '/',
        component: GamePage,
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
