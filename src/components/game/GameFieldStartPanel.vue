<template>
  <div class="field-container">
    <div class="field-start-block">
      <div class="triangle-icon">
        <BasePaper @click="playerChoice('paper')" class="paper-position" />
        <BaseRock @click="playerChoice('rock')" class="rock-position" />
        <BaseScissors
          @click="playerChoice('scissors')"
          class="scissors-position"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const userItem = ref();
    const gameStarted = computed(() => store.state.gameStarted);

    // Выбор игрока
    function playerChoice(value) {
      userItem.value = value;
      const currentGameStarted = !gameStarted.value;

      store.commit("UPDATE_CURRENT_GAME_ITEM", userItem.value);
      store.commit("UPDATE_GAME_STATUS", currentGameStarted);
    }

    return {
      playerChoice,
    };
  },
};
</script>

<style scoped>
.field-container {
  height: 50vh;
}
.field-start-block {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.triangle-icon {
  position: absolute;
  background: url("../../assets/images/bg-triangle.svg");
  background-position: center center;
  background-repeat: no-repeat;
  width: 400px;
  height: 400px;
}
.paper-position,
.rock-position,
.scissors-position {
  position: absolute;
  width: 170px;
  height: 170px;
}
.paper-position {
  left: 0;
  top: 0;
}
.scissors-position {
  right: 0;
  top: 0;
}
.rock-position {
  bottom: 25px;
  right: 120px;
}
/* Адаптив */
@media only screen and (max-width: 425px) {
  .paper-position,
  .rock-position,
  .scissors-position {
    position: absolute;
    width: 150px;
    height: 150px;
  }
  .paper-position {
    left: 30px;
    top: 30px;
  }
  .scissors-position {
    right: 30px;
    top: 30px;
  }
  .rock-position {
    bottom: 40px;
    right: 130px;
  }
}
</style>
