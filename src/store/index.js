import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
  plugins: [
    createPersistedState({
      reducer(value) {
        return {
          // Сохраняем в состоянии только score
          score: value.score,
        };
      },
    }),
  ],
  state: {
    score: 0,
    userItem: null,
    gameStarted: false,
    showModal: false,
  },
  mutations: {
    UPDATE_SCORE(state, score) {
      state.score = score;
    },
    UPDATE_CURRENT_GAME_ITEM(state, userItem) {
      state.userItem = userItem;
    },
    UPDATE_GAME_STATUS(state, gameStarted) {
      state.gameStarted = gameStarted;
    },
    UPDATE_MODAL(state, showModal) {
      state.showModal = showModal;
    },
  },
});

export default store;
