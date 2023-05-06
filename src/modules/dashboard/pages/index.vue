<template>
  <div class="home">
    <statistics-list :statistics="statistics" class="h-fit" />

    <div class="mt-4">
      <revenue :data="revenueChart" v-if="revenueChart.length" />
      <orders-states
        class="mt-4"
        :data="ordersChart"
        v-if="ordersChart.length"
      />
    </div>
    <!-- <orders-table :orders="orders" /> -->
  </div>
</template>

<script>
import OrdersTable from "@/components/OrdersTable.vue";
import OrdersStates from "../components/Charts/OrdersStates.vue";
import Revenue from "../components/Charts/Revenue.vue";
import StatisticsList from "../components/Statistics/StatisticsList.vue";

export default {
  components: { StatisticsList, Revenue, OrdersStates, OrdersTable },
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
    };
  },

  methods: {
    async getAdminData() {
      const { data } = await this.$api.get("/admin/dashboard");
      const stats = data.data.stats;
      this.statistics.forEach((stat) => {
        stat.number = stats[stat.title.toLowerCase().replace(" ", "_")];
      });
      this.ordersChart = stats.orders_chart;
      this.revenueChart = stats.revenue_chart;
    },
  },
  created() {
    this.getAdminData();
  },
};
</script>

<style>
</style>

