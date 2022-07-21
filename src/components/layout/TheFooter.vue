<template>
  <div class="footer-container">
    <button @click="openModal()" class="footer-btn">Rules</button>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  setup() {
    // Переменные
    const store = useStore();
    const showModal = computed(() => store.state.showModal);

    // Открыть модальное окно
    function openModal() {
      store.commit("UPDATE_MODAL", !showModal.value);
    }

    return {
      openModal,
    };
  },
};
</script>

<style scoped>
.footer-container {
  position: absolute;
  right: 50px;
  bottom: 50px;
}
.footer-btn {
  font-size: 16px;
  color: var(--c-white);
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 2px;
  padding: 12px 40px;
  border: 2px solid var(--c-header-outline);
  border-radius: 10px;
}
/* Адаптив */
@media only screen and (max-width: 768px) {
  .footer-container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
  }
}
@media only screen and (max-width: 425px) {
  .footer-container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 30px;
  }
}
@media only screen and (max-width: 375px) {
  .footer-container {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 30px;
  }
}
</style>
