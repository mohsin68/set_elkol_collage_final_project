<template>
  <base-card class="statistics-cart px-6 py-8">
    <div class="d-flex justify-between items-center">
      <div class="d-flex flex-col">
        <span class="total-numbers text-3xl">{{ number }}</span>
        <span class="total-text text-sm text-muted">{{ title }}</span>
      </div>
      <div class="icon bg-opacity-25 px-4 py-3 rounded-md">
        <v-icon class="text-white" size="30px"> {{ icon }} </v-icon>
      </div>
    </div>
  </base-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    number: {
      type: (String, Number),
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style>
</style>
