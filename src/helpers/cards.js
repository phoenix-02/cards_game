const suits = [
     {name:'spade', code: '\u2660', color: 'black' },
     {name:'heart', code: '\u2665', color: 'red' },
     {name:'diamond', code: '\u2666', color: 'red' },
     {name:'club', code: '\u2663', color: 'black' },
];

const ranks = ['2','3','4','5','6','7','8','9', '10', 'J', 'Q', 'K', 'A'];


const generateCards = () => {
    const cards = [];

    for (const rank of ranks) {
        for (const suit of suits) {
            cards.push({ rank, suit, name: `${rank}${suit.name}`, flipped: false});
        }
    }

    return cards;
};

export const shuffledCards = () => {
    const cards = generateCards()
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    return cards;
}

export const divideDeck = (cards) => {
    const piles = [[], [], []];

    for (let i = 0; i < cards.length; i++) {
        piles[i % 3].push(cards[i]);
    }

    return piles;
};
