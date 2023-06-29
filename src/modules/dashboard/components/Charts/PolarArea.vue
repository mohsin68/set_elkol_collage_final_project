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
          type: "polarArea",
        },
        labels: this.data.map((item) => item.name),
        legend: {
          position: "bottom",
          labels: {
            colors: ["fff"],
          },
        },
        dataLabels: {
          enabled: true,
          dropShadow: {
            enabled: false,
          },
        },
        colors: ["#E966A0", "#2B2730", "#6554AF", "#643843", "#164B60"],
        stroke: {
          width: 1,
          colors: undefined,
        },
        yaxis: {
          show: false,
        },
        plotOptions: {
          polarArea: {
            rings: {
              strokeWidth: 0,
            },
            spokes: {
              strokeWidth: 0,
            },
          },
        },
        // theme: {
        //   monochrome: {
        //     enabled: true,
        //     shadeTo: "light",
        //     shadeIntensity: 0.6,
        //   },
        // },
      },
    };
  },
};
</script>

<style>
</style>
