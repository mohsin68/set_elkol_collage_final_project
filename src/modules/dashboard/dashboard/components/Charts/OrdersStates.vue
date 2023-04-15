<template>
  <base-cart>
    <h4 class="font-bold mb-3">Orders Statistics</h4>
    <apexchart
      width="100%"
      height="300"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </base-cart>
</template>

<script>
export default {
  data() {
    return {
      series: [
        {
          name: "Revenue",
          data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
        },
      ],
      chartOptions: {
        theme: {
          mode: "dark",
          monochrome: {
            enabled: true,
            color: "#519259",
            shadeTo: "dark",
            shadeIntensity: 0.65,
          },
        },
        chart: {
          type: "area",
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
          opacity: 0.3,
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
          width: 3,
        },
        xaxis: {
          categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
          ],
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
