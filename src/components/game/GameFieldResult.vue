<template>
  <div class="result-container">
    <h2 class="result-title"><slot name="result"></slot></h2>
    <button @click="restartGame()" class="result-btn">Play Again</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const gameStarted = computed(() => store.state.gameStarted);
    let currentGameStarted = gameStarted.value;

    // Перезапустить игру
    function restartGame() {
      currentGameStarted = !gameStarted.value;
      store.commit("UPDATE_GAME_STATUS", currentGameStarted);
    }

    return {
      restartGame,
    };
  },
};
</script>

<style scoped>
.result-title {
  font-size: 48px;
  font-weight: 700;
  color: var(--c-white);
  text-transform: uppercase;
  letter-spacing: 2px;
  padding-bottom: 15px;
}
.result-btn {
  background-color: var(--c-white);
  width: 100%;
  padding: 12px;
  border-radius: 8px;
  font-family: "Barlow Semi Condensed", sans-serif;
  font-weight: 500;
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 2px;
  transition: 0.2s ease;
}
.result-btn:hover {
  color: var(--c-rock);
  transition: 0.3s ease;
}
/* Адаптив */
@media only screen and (max-width: 1024px) {
  .result-title {
    font-size: 36px;
  }
}
@media only screen and (max-width: 768px) {
  .result-title {
    font-size: 52px;
  }
}
</style>
