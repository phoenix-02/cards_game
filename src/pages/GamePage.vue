<template>
  <div class="game-page">
    <div class="deck">
      <div
        v-for="(pile, pileIndex) in piles"
        :key="pileIndex"
        class="pile"
      >
        <div
          v-for="(card, cardIndex) in pile"
          :key="card.name"
          :style="cardStyles(cardIndex, card.flipped, pile)"
          :class="['pile__item', { 'flipped': card.flipped }]"
        >
          <Card
            :data="card"
            @click.stop="toggleFlipCard(card)"
          />
        </div>
        <div class="cube">123</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from '@/components/PlayingCard.vue';
import { divideDeck } from '@/helpers/cards';
import { useCardStore } from '@/store/cards';
import {
  reactive
} from 'vue';

const cardStore = reactive(useCardStore());
const piles = reactive(divideDeck(cardStore.cards));

const cardStyles = ( index, flipped, pile)=>{
  const cardPadding = 3;
  // z-index increment on init and decrement on moving card to another
  if(flipped) return {
    'z-index': 100 + pile.length - index,
    'bottom': `calc(100% - ${ -index * cardPadding }px)`,
  };

  return {
    'z-index': index,
    'bottom': `-${ index * cardPadding }px`
  };
}
const isCardAbleToFlip = (card) => {
  // find last not flipped card name
  const pilesLastElements = [];
  piles.forEach(pile => {
    const notFlippedCardsInPile = pile.filter(c => !c.flipped);
    // remove comment if needed multiple piles
    // if(notFlippedCardsInPile.length === 0) return;
    pilesLastElements.push(notFlippedCardsInPile[notFlippedCardsInPile.length - 1]?.name || '');

  });
  // hardcoded pile for better visual
  return pilesLastElements[1] === card.name;
  // needed to allow all piles to flip cards
  // return pilesLastElements.includes(card.name);
};
const toggleFlipCard = (cardToFlip) => {
  if(!isCardAbleToFlip(cardToFlip)) return;

  const cardToToggle = cardStore.cards.find(card => card.name === cardToFlip.name);
  cardToToggle.flipped = !cardToFlip.isFlipped;
};
</script>

<style scoped>
@keyframes moveUp {
  0% {
    bottom: -10%; /* Start position at the bottom */
  }
  100% {
    bottom: 100%; /* End position at the top */
  }
}

.game-page {
  align-items: center;
  background: #0C0E1C url("/images/BG.png") no-repeat center center fixed;
  background-size: cover;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: center;
  width: 100%;

  .deck {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    width: 80%;
    height: 50%;

  }

  .pile {
    margin: 0 3px;
    height: 100%;

    .pile__item {
      bottom: 0;
      position: absolute;
      &.flipped{
        animation: moveUp 3s ease-in-out ;

      }
    }
  }
}

</style>
