<template>
  <div class="header-container">
    <div class="header-outline">
      <img src="../../assets/images/logo.svg" alt="Logo" />
      <div class="score-group">
        <h4 class="score-title">Score</h4>
        <h2 class="score-count">{{ score }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const score = computed(() => store.state.score);

    return {
      score,
    };
  },
};
</script>

<style scoped>
.header-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30vh;
}
.header-outline {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 800px;
  border: 3px solid var(--c-header-outline);
  border-radius: 20px;
  padding: 20px;
  margin: 50px 0;
}
.score-group {
  display: flex;
  line-height: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--c-white);
  border-radius: 10px;
  padding: 15px;
  width: 150px;
}
.score-title {
  color: var(--c-score-text);
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
}
.score-count {
  font-size: 62px;
  font-weight: 700;
}
/* Адаптив */
@media only screen and (max-width: 425px) {
  .score-group {
    width: 110px;
  }
}
</style>
