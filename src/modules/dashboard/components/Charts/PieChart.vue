<template>
  <base-card>
    <h4 class="font-bold mb-3">
      {{ label }}
    </h4>
    <apexchart
      width="100%"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </base-card>
</template>

<script>
export default {
  props: {
    data: Array,
    label: String,
  },
  data() {
    return {
      series: this.data.map((item) => item.total),
      chartOptions: {
        chart: {
          width: 380,
          type: "pie",
        },
        labels: this.data.map((item) => item.name),
        legend: {
          position: "bottom",
          labels: {
            // useSeriesColors: true,
            colors: ["fff"],
          },
        },
        dataLabels: {
          enabled: true,
          dropShadow: {
            enabled: false,
          },
        },
        colors: ["#4A3A8C", "#EA5F89", "#9B3192", "#57167E", "#2B0B3F"],
        stroke: {
          width: 0,
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200,
              },
              legend: {
                position: "bottom",
              },
            },
          },
        ],
      },
    };
  },
};
</script>

<style>
</style>
