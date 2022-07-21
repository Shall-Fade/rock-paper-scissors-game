<template>
  <div class="game-container">
    <TheHeader />
    <transition name="modal">
      <BaseModal v-if="showModal" />
    </transition>
    <GameFieldChoicePanel v-if="gameStarted" />
    <GameFieldStartPanel v-else />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "../components/layout/TheHeader.vue";
import TheFooter from "../components/layout/TheFooter.vue";
import GameFieldStartPanel from "../components/game/GameFieldStartPanel.vue";
import GameFieldChoicePanel from "../components/game/GameFieldChoicePanel.vue";
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    TheHeader,
    GameFieldStartPanel,
    GameFieldChoicePanel,
    TheFooter,
  },
  setup() {
    // Переменные
    const store = useStore();
    const gameStarted = computed(() => store.state.gameStarted);
    const showModal = computed(() => store.state.showModal);

    return {
      gameStarted,
      showModal,
    };
  },
};
</script>

<style scoped>
.game-container {
  height: 100vh;
}
/* Анимация модального окна */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.5s ease;
}
.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}
</style>
