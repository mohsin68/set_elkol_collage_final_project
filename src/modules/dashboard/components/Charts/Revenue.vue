<template>
  <base-card>
    <h4 class="font-bold mb-3">Revenue</h4>
    <apexchart
      height="300"
      :options="chartOptions"
      :series="series"
      ref="lineChart"
    ></apexchart>
  </base-card>
</template>

<script>
import formatNumber from "@/helpers/formatNumber";
export default {
  props: {
    data: Array,
  },
  data() {
    return {
      series: [
        {
          name: "Revenue",
          data: this.data.map((item) => {
            return item.total;
          }),
        },
      ],
      chartOptions: {
        theme: {
          mode: "dark",
          monochrome: {
            enabled: true,
            color: "#F29322",
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
        plotOptions: {
          bar: {
            borderRadius: 5,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [...this.data.map((item) => item.month), "Total"],
        },
        grid: {
          borderColor: "#6D6D6D",
        },
        yaxis: {
          labels: {
            formatter: (val) => formatNumber(val),
          },
        },
      },
    };
  },
};
</script>


