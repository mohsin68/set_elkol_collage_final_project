<template>
  <div>
    <navbar @toggleSidebar="toggleSidebar" />
    <sidebar :drawer="drawer" />
    <v-main>
      <v-container>
        <transition name="slide-up" mode="out-in">
          <router-view />
        </transition>
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
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.5s ease;
}
.slide-up-enter,
.slide-up-leave-to {
  transform: translateY(100px);
  opacity: 0;
}
</style>
