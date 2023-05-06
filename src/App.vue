<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
export default {
  created() {
    if (localStorage.getItem("token")) {
      this.$store.dispatch("autoLogin");
    }
  },
};
</script>

<style>
</style>
