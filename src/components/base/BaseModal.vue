<template>
  <div class="modal-mask">
    <div class="modal-container">
      <div class="modal-header">
        <h3 class="modal-title">Rules</h3>
        <button @click="closeModal()" class="modal-btn">
          <img
            class="close-img"
            src="../../assets/images/icon-close.svg"
            alt="Close"
          />
        </button>
      </div>
      <div class="modal-body">
        <img
          class="rule-img"
          src="../../assets/images/image-rules.svg"
          alt="Rules"
        />
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
    const showModal = computed(() => store.state.showModal);

    // Закрыть модальное окно
    function closeModal() {
      store.commit("UPDATE_MODAL", !showModal);
    }

    return {
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal-mask {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.3s ease;
}
.modal-container {
  width: 400px;
  text-align: center;
  background-color: var(--c-white);
  padding: 25px 30px;
  border-radius: 10px;
}
.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 40px;
}
.modal-title {
  font-size: 32px;
  text-transform: uppercase;
}
.rule-img {
  width: 100%;
}
/* Адаптив */
@media only screen and (max-width: 768px) {
  .modal-mask {
    background-color: var(--c-white);
  }
  .modal-title {
    font-size: 42px;
    position: absolute;
    top: 125px;
    left: 0;
    right: 0;
  }
  .modal-btn {
    position: absolute;
    bottom: 50px;
    left: 0;
    right: 0;
  }
}
</style>
