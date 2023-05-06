<template>
  <div class="" v-if="data.length">
    <div v-for="(err, i) in data" :key="i">
      <span class="text-rose-600 text-xs font-semibold">{{ err }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
};
</script>

<style>
</style>
