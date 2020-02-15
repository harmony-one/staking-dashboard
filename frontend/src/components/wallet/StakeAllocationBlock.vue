<template>
  <div>
    <div class="chart-container-stake-allocate">
      <ChartPie
        :chartdata="chartdata"
        :options="options"
        style="height: 300px;"
      />
    </div>
  </div>
</template>

<script>
import ChartPie from "./components/ChartPie"
import { ones } from "scripts/num"
import { chartColors } from "./components/chartColors"

function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    : null
}

export default {
  name: "StakeAllocationBlock",
  components: { ChartPie },
  props: ["historyData"],
  data: () => ({
    history: [
      {
        validator: "Sample",
        stake_amount: 12 * 10e17
      },
      {
        validator: "Harmony",
        stake_amount: 22 * 10e17
      },
      {
        validator: "Other",
        stake_amount: 44 * 10e17
      }
    ],
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 0,
      plugins: {
        labels: {
          render: "percentage",
          fontColor: function(data) {
            const rgb = hexToRgb(data.dataset.backgroundColor[data.index])
            const threshold = 140
            const luminance = 0.299 * rgb.r + 0.587 * rgb.g + 0.114 * rgb.b
            return luminance > threshold ? "black" : "white"
          },
          precision: 0
        }
      },
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (data, allData) =>
            "Validator name: " + allData.labels[data[0].index],
          label: (data, allData) => {
            return (
              "Stake amount: " +
              ones(allData.datasets[0].data[data.index]).toFixed(0) +
              " ONE"
            )
          }
        }
      },
      // hover: {
      //   mode: "nearest",
      //   intersect: true
      // },
      legend: {
        position: 'bottom'
      },
      scales: {
        xAxes: [{ display: false }],
        yAxes: [{ display: false }]
      }
    }
  }),
  computed: {
    chartdata() {
      // const stake_amount_total = history.reduce(
      //   (summ, v) => summ + v.stake_amount,
      //   0
      // )

      return {
        labels: this.history.map(v => v.validator),
        datasets: [
          {
            data: this.history.map(v => v.stake_amount),
            backgroundColor: chartColors
          }
        ]
      }
    }
  }
}
</script>

<style>
.chart-container-stake-allocate {
  margin: 5px 0 15px 0;
}
</style>
