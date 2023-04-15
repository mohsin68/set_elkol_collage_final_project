<template>
  <div class="orders-page">
    <header class="d-flex gap-2 mb-4">
      <v-icon color="yellow">mdi-food</v-icon>
      <h4 class="text-yellow">All Orders</h4>
    </header>
    <orders-table :orders="orders" />
  </div>
</template>

<script>
import OrdersTable from "@/components/OrdersTable.vue";
export default {
  components: { OrdersTable },
  data() {
    return {
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
          id: 5,
          clientName: "Assem",
          product: "Chicken Meal",
          totalPrice: 120,
          orderStatus: "Canceled",
          orderDate: "2021-01-01",
        },
      ],
    };
  },
};
</script>

<style>
</style>
