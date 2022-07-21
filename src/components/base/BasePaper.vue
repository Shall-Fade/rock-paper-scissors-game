<template>
  <div class="paper-btn">
    <img
      class="paper-icon"
      src="../../assets/images/icon-paper.svg"
      alt="Paper"
    />
  </div>
</template>

<style scoped>
.paper-btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c-white);
  border-radius: 100%;
  border: 17px solid var(--c-paper);
  box-shadow: 0 9px 0 hsl(230, 89%, 40%);
}
.paper-icon {
  width: 60px;
  height: 70px;
}
</style>
