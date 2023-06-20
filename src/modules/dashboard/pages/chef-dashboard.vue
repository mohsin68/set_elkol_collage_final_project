<template>
  <h1>Hello Chef</h1>
</template>

<script>
export default {
  methods: {
    async getChefDashboardData() {
      try {
        const { data } = await this.$api.get("/chef/dashboard");
        console.log(data);
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
