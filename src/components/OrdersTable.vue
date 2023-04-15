<template>
  <v-data-table :headers="headers" :items="orders" hide-default-footer>
    <!-- add # before id -->
    <template v-slot:item.id="{ item }">
      <span class=""> #{{ item.id }} </span>
    </template>
    <template v-slot:item.orderStatus="{ item }">
      <v-chip
        small
        :color="
          item.orderStatus === 'Pending'
            ? 'warning'
            : item.orderStatus === 'Paid'
            ? 'success'
            : 'error'
        "
      >
        {{ item.orderStatus }}
      </v-chip>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    orders: {
      type: Array,
    },
  },
  data() {
    return {
      headers: [
        {
          text: "Order ID",
          value: "id",
        },
        {
          text: "Client Name",
          value: "clientName",
        },
        {
          text: "Product",
          value: "product",
        },
        {
          text: "Total Price",
          value: "totalPrice",
        },
        {
          text: "Order Status",
          value: "orderStatus",
          align: "center",
        },
        {
          text: "Order Date",
          value: "orderDate",
        },
      ],
    };
  },
};
</script>

<style>
</style>
