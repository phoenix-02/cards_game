import {
    shuffledCards,
} from '@/helpers/cards';
import { defineStore } from 'pinia';


export const useCardStore = defineStore({
    id: 'cards', state: () => ({
        cards: shuffledCards(),
    }), actions: {
        initializeDeck() {
        },
    },
});
