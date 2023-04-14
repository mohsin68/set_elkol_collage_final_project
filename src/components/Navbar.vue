<template>
  <v-app-bar app color="primary" elevation="0">
    <v-app-bar-nav-icon
      @click.stop="$emit('toggleSidebar')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>My App</v-toolbar-title>
  </v-app-bar>
</template>

<style>
</style>
