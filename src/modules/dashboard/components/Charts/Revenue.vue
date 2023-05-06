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
            color: "#F29322",
            shadeTo: "dark",
            shadeIntensity: 0.65,
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
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
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
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              return val + "k";
            },
          },
        },
      },
    };
  },
};
</script>


