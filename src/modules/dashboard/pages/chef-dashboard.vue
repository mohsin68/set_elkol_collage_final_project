<template>
  <div class="chef-dashboard">
    <div class="statistcs-list grid grid-cols-3 gap-4">
      <statistics-cart
        v-for="(stat, index) in stats"
        :key="index"
        :title="stat.title"
        :number="stat.number"
        :icon="stat.icon"
      />
    </div>
  </div>
</template>

<script>
import formatNumber from "@/helpers/formatNumber";
import StatisticsCart from "../components/Statistics/StatisticsCart.vue";
export default {
  components: {
    StatisticsCart,
  },
  data() {
    return {
      stats: [
        {
          number: null,
          title: "Total Meals",
          icon: "mdi-text-box-outline",
        },
        {
          number: null,
          title: "Total Orders",
          icon: "mdi-shopping-outline",
        },
        {
          number: null,
          title: "Total Revenue",
          icon: "mdi-currency-usd",
        },
      ],
    };
  },
  methods: {
    async getChefDashboardData() {
      try {
        const { data } = await this.$api.get("/chef/dashboard");
        this.stats.forEach((stat) => {
          const value =
            data.data.stats[stat.title.toLowerCase().replace(" ", "_")];
          if (stat.title === "Total Revenue") {
            stat.number = formatNumber(value * 0.01);
            return;
          }
          stat.number = formatNumber(value);
        });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.getChefDashboardData();
    console.log("Chef Dashboard");
  },
};
</script>

<style>
</style>
