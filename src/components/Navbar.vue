<template>
  <v-app-bar app color="dark" elevation="0">
    <v-app-bar-nav-icon @click.stop="$emit('toggleSidebar')">
      <img src="@/assets/menu.svg" alt="menu" />
    </v-app-bar-nav-icon>
    <v-toolbar-title class="capitalize">
      {{ this.$route.name }}
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
export default {
  mounted() {
    console.log("Navbar mounted", this.$route.name);
  },
};
</script>
<style>
</style>
