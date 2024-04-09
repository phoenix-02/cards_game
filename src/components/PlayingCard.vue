<template>
  <div :class="['card', {'is-hidden': !props.data.flipped }]">
    <div class="front">
      <span>{{ props.data.rank }}</span><br>
      <span :style="{color: props.data.suit.color}">{{ props.data.suit.code }}</span>
    </div>
    <div class="back"/>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  data: Object,
});

</script>

<style scoped>
.card {
  cursor: pointer;
  height: 270px;
  perspective: 1000px;
  perspective-origin: center 25em;
  position: relative;
  transform-style: preserve-3d;
  transition: transform .6s;
  width: 200px;

  @media screen and (max-width: 800px) {
    height: 130px;
    width: 90px;
  }

  &.is-hidden {
    transform: rotateY(180deg);
  }

  .front,
  .back {
    backface-visibility: hidden;
    border: 3px solid white;
    border-radius: 15px;
    box-shadow: 5px 5px 5px black;
    box-sizing: border-box;
    height: 100%;
    left: 0;
    overflow: hidden;
    padding: 10px;
    position: absolute;
    top: 0;
    width: 100%;
  }

  .front {
    background: white;
    font-size: 40px;
    font-weight: bold;
  }

  .back {
    background: url("/images/card-back.jpg") center no-repeat;
    background-size: cover;
    transform: rotateY(180deg);
  }
}

</style>
