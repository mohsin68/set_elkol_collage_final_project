<template>
  <div class="home">
    <statistics-list :statistics="statistics" class="h-fit" />

    <div class="grid grid-cols-5 gap-4 mt-4">
      <cities-chart
        class="col-span-2"
        :data="mostCities"
        label="Most Ordered Cities"
        v-if="mostCities.length"
      />

      <orders-states
        class="col-span-3"
        :data="ordersChart"
        label="Orders"
        v-if="ordersChart.length"
      />
    </div>
    <div class="grid grid-cols-5 gap-4 mt-4">
      <revenue
        class="col-span-3"
        :data="revenueChart"
        label="Revenue"
        v-if="revenueChart.length"
      />
      <meals-chart
        class="col-span-2"
        :data="bestMeals"
        label="Best Selling Meals"
        v-if="bestMeals.length"
      />
    </div>
  </div>
</template>

<script>
import OrdersTable from "@/components/OrdersTable.vue";
import OrdersStates from "../components/Charts/BarChart.vue";
import Revenue from "../components/Charts/AreaChart.vue";
import StatisticsList from "../components/Statistics/StatisticsList.vue";
import formatNumber from "@/helpers/formatNumber";
import mealsChart from "../components/Charts/PieChart.vue";
import citiesChart from "../components/Charts/PolarArea.vue";

export default {
  components: {
    StatisticsList,
    Revenue,
    OrdersStates,
    OrdersTable,
    mealsChart,
    citiesChart,
  },
  data() {
    return {
      statistics: [
        {
          title: "Total Meals",
          number: null,
          icon: "mdi-text-box-outline",
        },
        {
          title: "Total Orders",
          number: null,
          icon: "mdi-shopping-outline",
        },
        {
          title: "Total Customers",
          number: null,
          icon: "mdi-account-group-outline",
        },
        {
          title: "Total Revenue",
          number: null,
          icon: "mdi-currency-usd",
        },
      ],
      ordersChart: [],
      revenueChart: [],
      mostCities: [],
      bestMeals: [],
    };
  },

  methods: {
    async getAdminData() {
      const { data } = await this.$api.get("/admin/dashboard");
      const stats = data.data.stats;
      this.statistics.forEach((stat) => {
        const value = stats[stat.title.toLowerCase().replace(" ", "_")];
        if (stat.title === "Total Revenue") {
          stat.number = formatNumber(value * 0.01);
          return;
        }
        stat.number = formatNumber(value);
      });

      this.ordersChart = stats.orders_chart;
      this.mostCities = stats.most_cities_with_orders;
      this.bestMeals = stats.best_selling_meals_chart;
      this.revenueChart = stats.revenue_chart.map((item) => {
        return {
          month: item.month,
          total: item.total * 0.01,
        };
      });
    },
  },
  created() {
    this.getAdminData();
  },
};
</script>

<style>
</style>
