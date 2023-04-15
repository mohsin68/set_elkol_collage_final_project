<template>
  <base-cart class="statistics-cart px-6 py-8">
    <div class="d-flex justify-between items-center">
      <div class="d-flex flex-col">
        <span class="total-numbers text-3xl">{{ number }}</span>
        <span class="total-text text-sm text-muted">{{ title }}</span>
      </div>
      <div class="icon bg-opacity-25 px-4 py-3 rounded-md">
        <v-icon class="text-white"> {{ icon }} </v-icon>
      </div>
    </div>
  </base-cart>
</template>

<script>
import BaseCart from "@/components/BaseCart.vue";
export default {
  components: { BaseCart },
  props: {
    title: {
      type: String,
    },
    number: {
      type: Number,
    },
    icon: {
      type: String,
    },
  },
};
</script>

<style>
</style>
