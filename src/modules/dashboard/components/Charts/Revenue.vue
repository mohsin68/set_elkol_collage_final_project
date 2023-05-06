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
  props: {
    data: Array,
  },
  data() {
    return {
      series: [
        {
          name: "Revenue",
          data: this.data.map((item) => item.total),
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
          categories: [...this.data.map((item) => item.month), "Total"],
        },
        grid: {
          borderColor: "#6D6D6D",
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              const value = val.toString();
              return value.length > 3 ? `${value.slice(0, -3)}k` : value;
            },
          },
        },
      },
    };
  },
};
</script>


