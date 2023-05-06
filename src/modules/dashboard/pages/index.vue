<template>
  <div class="home">
    <statistics-list :statistics="statistics" class="h-fit" />

    <div class="grid md:grid-cols-2 lg:grid-cols-5 gap-4 my-4">
      <revenue class="lg:col-span-3" />
      <orders-states class="lg:col-span-2" />
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
          number: 120,
          icon: "mdi-text-box-outline",
        },
        {
          title: "Total Orders ",
          number: 180,
          icon: "mdi-shopping-outline",
        },
        {
          title: "Total Clients ",
          number: 240,
          icon: "mdi-account-group-outline",
        },
        {
          title: "Total Revenue ",
          number: 420,
          icon: "mdi-currency-usd",
        },
      ],

      orders: [
        {
          id: 1,
          clientName: "Ahmed Mohsen",
          product: "Chicken Meal",
          totalPrice: 120,
          orderStatus: "Pending",
          orderDate: "2021-01-01",
        },
        {
          id: 2,
          clientName: "Ahmed Naguib",
          product: "Chicken Meal",
          totalPrice: 520,
          orderStatus: "Paid",
          orderDate: "2021-01-01",
        },
        {
          id: 3,
          clientName: "Mohamed Refaat",
          product: "Chicken Meal",
          totalPrice: 440,
          orderStatus: "Pending",
          orderDate: "2021-01-01",
        },
        {
          id: 4,
          clientName: "Alla Mohamed",
          product: "Chicken Meal",
          totalPrice: 120,
          orderStatus: "Canceled",
          orderDate: "2021-01-01",
        },
        {
          id: 5,
          clientName: "Essra Sherif",
          product: "Chicken Meal",
          totalPrice: 120,
          orderStatus: "Paid",
          orderDate: "2021-01-01",
        },
        {
          id: 6,
          clientName: "Assem",
          product: "Chicken Meal",
          totalPrice: 120,
          orderStatus: "Canceled",
          orderDate: "2021-01-01",
        },
      ],
    };
  },

  methods: {
    async getAdminData() {
      const { data } = await this.$api.get("/admin");
    },
  },
};
</script>

<style>
</style>

