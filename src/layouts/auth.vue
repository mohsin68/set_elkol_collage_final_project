<template>
  <div class="auth-layout">
    <v-main class="max-w-sm d-flex justify-center items-center flex-col">
      <div class="logo">
        <img src="@/assets/logo2.png" alt="logo" class="mx-auto w-34" />
        <img
          src="@/assets/images/signin_meal.png"
          class="w-20 mx-auto"
          alt="logo"
        />
      </div>
      <router-view />
    </v-main>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.auth-layout {
  background-image: url("@/assets/images/bg.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.8);
    width: 100%;
    height: 100%;
  }
}
</style>
