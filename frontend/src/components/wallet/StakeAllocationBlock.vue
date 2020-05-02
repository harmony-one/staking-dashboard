<template>
  <div>
    <div class="chart-container-stake-allocate">
      <ChartPie
        :chartdata="chartdata"
        :options="options"
        class="chart"
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
  props: ["delegations"],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 75,
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

      const colors = ['#94DE69', '#4CB7F9', '#6864FF', '#8E2ADF', '#CC3ED0', '#FD5EAB', '#FFA267', '#F0E466',
      '#94DE69', '#4CB7F9', '#6864FF', '#8E2ADF', '#CC3ED0', '#FD5EAB', '#FFA267', '#F0E466',
      '#94DE69', '#4CB7F9', '#6864FF', '#8E2ADF', '#CC3ED0', '#FD5EAB', '#FFA267', '#F0E466']

      return {
        labels: this.delegations.map(v => v.validator),
        datasets: [
          {
            data: this.delegations.map(v => v.amount),
            backgroundColor: colors
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.chart-container-stake-allocate {
  display: flex;
  height: 50%;
  margin: 0 auto;
}

.chart {
  height: 300px;
  margin: 0 auto;
}


@media screen and (max-width: 414px) {
  .chart {
    display: flex;
    height: 50%;
    margin: 0 auto;
    width: 256px;
  }
}

</style>
