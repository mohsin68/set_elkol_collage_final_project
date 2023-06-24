<template>
  <div
    class="v-loading fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
    v-if="loading"
  >
    <v-progress-circular
      indeterminate
      color="primary"
      size="64"
    ></v-progress-circular>
  </div>
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
  },
  name: "VLoading",
};
</script>
