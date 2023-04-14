<template>
  <v-app>
    <navbar @toggleSidebar="toggleSidebar" />
    <sidebar :drawer="drawer" />
    <v-main>
      <v-container>
        <h1 class="text-purple-700">Hello</h1>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  components: {
    Navbar: () => import('./components/Navbar.vue'),
    Sidebar: () => import('./components/Sidebar.vue'),
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
