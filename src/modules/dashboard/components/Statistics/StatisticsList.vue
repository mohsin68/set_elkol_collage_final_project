<template>
  <div
    class="statistcs-list grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
  >
    <statistics-cart
      v-for="statistic in statistics"
      :key="statistic.title"
      :title="statistic.title"
      :number="statistic.number"
      :icon="statistic.icon"
      :color="statistic.color"
    />
  </div>
</template>

<script>
import StatisticsCart from "./StatisticsCart.vue";
export default {
  components: { StatisticsCart },
  props: ["statistics"],
};
</script>

<style lang="scss">
@use "sass:map";
$colors: (
  "1": #6eae8a52,
  "2": #77744ca3,
  "3": #48697f6b,
  "4": #8f6da77d,
);
@for $i from 1 through 4 {
  .statistcs-list {
    .statistics-cart:nth-child(#{$i}) {
      background-color: map.get($colors, "#{$i}");
      .icon {
        background-color: map.get($colors, "#{$i}");
      }
    }
  }
}
</style>
