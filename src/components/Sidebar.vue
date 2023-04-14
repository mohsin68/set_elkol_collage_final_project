<template>
  <v-navigation-drawer :value="drawer" color="primary" app fixed width="300">
    <v-container>
      <div class="logo">
        <img src="@/assets/logo.png" class="w-36" />
      </div>
      <v-list>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" link>
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
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
      { title: "Item", icon: "mdi-inbox" },
      { title: "Item", icon: "mdi-star" },
      { title: "Item", icon: "mdi-send" },
      { title: "Item", icon: "mdi-email" },
    ],
  }),
};
</script>

<style>
</style>
