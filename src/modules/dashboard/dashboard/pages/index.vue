<template>
  <div class="home">
    <statistics-list :statistics="statistics" />
  </div>
</template>

<script>
import StatisticsList from "../components/Statistics/StatisticsList.vue";
export default {
  components: { StatisticsList },
  data() {
    return {
      statistics: [
        {
          title: "Total Menus",
          number: 120,
          icon: "mdi-text-box-outline",
        },
        {
          title: "Total Orders Today",
          number: 180,
          icon: "mdi-shopping-outline",
        },
        {
          title: "Total Clients Today",
          number: 240,
          icon: "mdi-account-group-outline",
        },
        {
          title: "Total Revenue Today",
          number: 420,
          icon: "mdi-currency-usd",
        },
      ],
    };
  },
};
</script>

<style>
</style>

