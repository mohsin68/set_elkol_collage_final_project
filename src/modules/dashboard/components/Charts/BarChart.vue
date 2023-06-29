<template>
  <base-card>
    <h4 class="font-bold mb-3">
      {{ label }}
    </h4>
    <apexchart
      width="100%"
      height="300"
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
      series: [
        {
          name: this.label,
          data: this.data.map((item) => item.total),
        },
      ],
      chartOptions: {
        theme: {
          mode: "dark",
          monochrome: {
            enabled: true,
            color: "#4A3A8C",
          },
        },
        chart: {
          type: "bar",
          background: "transparent",
          zoom: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        fill: {
          type: "solid",
          // opacity: 0.3,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        xaxis: {
          categories: [...this.data.map((item) => item.month), "Total"],
        },
        grid: {
          borderColor: "#6D6D6D",
          strokeDashArray: 5,
        },
        yaxis: {},
      },
    };
  },
};
</script>

<style>
</style>
