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
    <div class="grid grid-cols-5 gap-4 mt-4">
      <meals-chart
        class="col-span-2"
        :data="mealsChart"
        label="Best Selling Meals"
        v-if="mealsChart.length"
      />

      <revenue-chart
        class="col-span-3"
        :data="revenueChart"
        label="Revenue"
        v-if="revenueChart.length"
      />
    </div>
  </div>
</template>

<script>
import formatNumber from "@/helpers/formatNumber";
import StatisticsCart from "../components/Statistics/StatisticsCart.vue";
import MealsChart from "../components/Charts/PieChart.vue";
import RevenueChart from "../components/Charts/AreaChart.vue";
export default {
  components: {
    StatisticsCart,
    MealsChart,
    RevenueChart,
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
      mealsChart: [],
      revenueChart: [],
      ordersChart: [],
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
        this.mealsChart = data.data.stats.best_selling_meals_chart;
        this.revenueChart = data.data.stats.revenue_chart.map((item) => {
          return {
            ...item,
            total: item.total * 0.01,
          };
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
