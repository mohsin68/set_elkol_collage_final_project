<template>
  <div>
    <navbar @toggleSidebar="toggleSidebar" />
    <sidebar :drawer="drawer" />
    <v-main>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  components: {
    Navbar: () => import("../components/Navbar.vue"),
    Sidebar: () => import("../components/Sidebar.vue"),
  },
  data() {
    return {
      drawer: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.drawer = !this.drawer;
    },
  },
};
</script>
<style lang="scss">
</style>
