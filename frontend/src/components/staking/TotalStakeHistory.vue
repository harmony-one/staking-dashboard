<template>
  <div>
    <div class="chart-container">
      <ChartLine
        :chartdata="chartdata"
        :options="options"
        style="height: 300px; width: 100%;"
      />
    </div>
  </div>
</template>

<script>
import ChartLine from "./PageValidatorCharts/components/ChartLine"
import { ones, zeroDecimals } from "../../scripts/num"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

export default {
  name: "TotalStakeHistory",
  components: { ChartLine },
  props: ["data", "median", "networkInfo"],
  data: () => ({
    options: {
      responsive: true,
      plugins: {
        labels: false,
      },
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: (data) => "",
          label: (data, a, b) => `${zeroDecimals(data.yLabel)} staked at epoch ${data.xLabel}`
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'epochs'
            },
            display: true,
            gridLines: {
              display: false
            },
          }
        ],
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: 'ONE'
            },
            display: true,
            gridLines: {
              display: true
            },
            ticks: {
              min: 0
            }
          }
        ]
      }
    }
  }),
  computed: {
    chartdata() {
      const epochs = Object.keys(this.data)
      const elected = epochs.sort().map((k) => ones(this.data[k]['total-staking']))
      
      return {
        labels: epochs,
        datasets: [
          {
            label: "Staked ONE distribution",
            backgroundColor: '#00ADE888',
            borderColor: 'transparent',
            pointRadius: 0,
            minHeight: 16,
        lineTension: 0,
            data: elected,
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  background: white;
  margin-bottom: var(--double);
}
</style>
