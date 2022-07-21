<template>
  <div class="scissors-btn">
    <img
      class="scissors-icon"
      src="../../assets/images/icon-scissors.svg"
      alt="Scissors"
    />
  </div>
</template>

<style scoped>
.scissors-btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c-white);
  border-radius: 100%;
  border: 17px solid var(--c-scissors);
  box-shadow: 0 9px 0 hsl(40, 84%, 33%);
}
.scissors-icon {
  width: 60px;
  height: 70px;
}
</style>
