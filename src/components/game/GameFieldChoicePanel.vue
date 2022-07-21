<template>
  <div class="field-container">
    <!-- Выбор игрокаа -->
    <div class="player-choice">
      <h3 class="field-title">You Picked</h3>
      <div :class="{ 'win-effect': isWinner === 'player' }">
        <BasePaper v-if="userItem === 'paper'" class="paper-btn" />
        <BaseRock v-else-if="userItem === 'rock'" class="rock-btn" />
        <BaseScissors
          v-else-if="userItem === 'scissors'"
          class="scissors-btn"
        />
      </div>
    </div>
    <!-- Результат -->
    <transition name="result">
      <game-field-result class="mob-result" v-if="showItem">
        <template v-slot:result>{{ resultTitle }}</template>
      </game-field-result>
    </transition>
    <!-- Выбор компьютера -->
    <div class="computer-choice">
      <h3 class="field-title">House Picked</h3>
      <div v-if="showItem" :class="{ 'win-effect': isWinner === 'computer' }">
        <BasePaper v-if="computerItem === 'paper'" class="paper-btn" />
        <BaseRock v-else-if="computerItem === 'rock'" class="rock-btn" />
        <BaseScissors
          v-else-if="computerItem === 'scissors'"
          class="scissors-btn"
        />
      </div>
      <div v-else>
        <div class="item-shadow"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { ref, computed, onMounted } from "vue";
import GameFieldResult from "./GameFieldResult.vue";
export default {
  components: {
    GameFieldResult,
  },
  setup() {
    // Переменные
    const store = useStore();
    const userItem = computed(() => store.state.userItem);
    const score = computed(() => store.state.score);
    const computerItem = ref("");
    const resultTitle = ref();
    const isWinner = ref();
    const showItem = ref(false);
    let currentScore = score;

    onMounted(() => {
      computerChoice();
      setTimeout(getResult, 3000);
    });

    // Выбор компьютера
    function computerChoice() {
      let randomChoice = Math.floor(Math.random() * 3);

      if (randomChoice == 0) {
        computerItem.value = "paper";
      } else if (randomChoice == 1) {
        computerItem.value = "rock";
      } else if (randomChoice == 2) {
        computerItem.value = "scissors";
      }
    }

    // Получить результат
    function getResult() {
      if (userItem.value === computerItem.value) {
        resultTitle.value = "Draw";
      } else if (
        (userItem.value === "paper" && computerItem.value === "rock") ||
        (userItem.value === "scissors" && computerItem.value === "paper") ||
        (userItem.value === "rock" && computerItem.value === "scissors")
      ) {
        resultTitle.value = "You Win";
        isWinner.value = "player";
        currentScore = score.value + 1;
        store.commit("UPDATE_SCORE", currentScore);
      } else {
        resultTitle.value = "You Lose";
        isWinner.value = "computer";
        if (score.value > 0) {
          currentScore = score.value - 1;
        }
        store.commit("UPDATE_SCORE", currentScore);
      }

      // Показать элемент
      showItem.value = true;
    }

    return {
      userItem,
      computerItem,
      resultTitle,
      isWinner,
      showItem,
      computerChoice,
    };
  },
};
</script>

<style scoped>
.field-container {
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.field-title {
  color: var(--c-white);
  text-transform: uppercase;
  font-size: 20px;
  margin-bottom: 30px;
  letter-spacing: 4px;
}
.player-choice,
.computer-choice {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 100px;
}
.item-shadow {
  background-color: var(--c-black);
  border-radius: 100%;
  opacity: 0.2;
  animation: 3s pulse infinite;
}
.paper-btn,
.rock-btn,
.scissors-btn,
.item-shadow {
  width: 200px;
  height: 200px;
}
/* Анимация блока с результатом */
.result-enter-active,
.result-leave-active {
  transition: opacity 3s ease;
}
.result-enter-from,
.result-leave-to {
  opacity: 0;
}
.win-effect {
  border-radius: 100%;
  box-shadow: 0 0 0 3em var(--с-light-grey), 0 0 0 6em var(--c-grey),
    0 0 0 9em var(--c-dark-grey);
  animation: win 5s infinite;
  z-index: -1;
}
/* Анимация победы одной из сторон */
@keyframes win {
  0% {
    box-shadow: 0 0 0 0em var(--с-light-grey), 0 0 0 0em var(--c-grey),
      0 0 0 3em var(--c-dark-grey);
  }
  50% {
    box-shadow: 0 0 0 3em var(--с-light-grey), 0 0 0 6em var(--c-grey),
      0 0 0 9em var(--c-dark-grey);
  }
  100% {
    box-shadow: 0 0 0 0em var(--с-light-grey), 0 0 0 0em var(--c-grey),
      0 0 0 3em var(--c-dark-grey);
  }
}
/* Анимация (Пульсация) */
@keyframes pulse {
  0% {
    transform: scale(0.5);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.5);
  }
}
/* Адаптив */
@media only screen and (max-width: 1024px) {
  .paper-btn,
  .rock-btn,
  .scissors-btn,
  .item-shadow {
    width: 170px;
    height: 170px;
  }
  .player-choice,
  .computer-choice {
    margin: 0 50px;
  }
}
@media only screen and (max-width: 768px) {
  .field-container {
    height: 40vh;
  }
  .field-title {
    font-size: 16px;
  }
  .mob-result {
    position: absolute;
    bottom: 120px;
  }
}
@media only screen and (max-width: 425px) {
  .paper-btn,
  .rock-btn,
  .scissors-btn,
  .item-shadow {
    width: 150px;
    height: 150px;
  }
  .player-choice,
  .computer-choice {
    margin: 0 20px;
  }
}
</style>
