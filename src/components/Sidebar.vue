<template>
  <v-navigation-drawer :value="drawer" color="primary" app fixed width="270">
    <v-container>
      <div class="logo px-2">
        <img src="@/assets/logo.png" class="w-36" />
      </div>
      <v-list nav dense class="mt-4">
        <v-list-item-group>
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            class="rounded-md mb-4"
            :to="item.url"
            exact-active-class="active"
          >
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>

      <v-btn
        class="mt-4 absolute bottom-9 w-[90%] left-1/2 transform -translate-x-1/2"
        color="red"
        outlined
      >
        <v-icon class="mr-2">mdi-logout</v-icon>
        Logout
      </v-btn>
    </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    drawer: {
      type: Boolean,
      required: true,
    },
  },
  data: () => ({
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", url: "/" },
      { title: "Orders", icon: "mdi-food", url: "/orders" },
      { title: "Item", icon: "mdi-send" },
      { title: "Item", icon: "mdi-email" },
    ],
  }),
};
</script>

<style lang="scss" scoped>
.active {
  background-color: theme("colors.yellow");
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    opacity: 0 !important;
    border-radius: 0;
  }
}
</style>
