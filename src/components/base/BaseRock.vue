<template>
  <div class="rock-btn">
    <img class="rock-icon" src="../../assets/images/icon-rock.svg" alt="Rock" />
  </div>
</template>

<style scoped>
.rock-btn {
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--c-white);
  border-radius: 100%;
  border: 19px solid var(--c-rock);
  box-shadow: 0 9px 0 hsl(349, 70%, 33%);
}
.rock-icon {
  width: 60px;
  height: 70px;
}
</style>
