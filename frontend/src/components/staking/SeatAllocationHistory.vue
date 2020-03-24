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
  name: "SeatAllocationHistory",
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
          label: (data) => `${zeroDecimals(data.yLabel)} seats elected for shard ${data.datasetIndex} at epoch ${data.xLabel}`
        }
      },
      legend: {
        display: false
      },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: false
            },
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: true
            },
          }
        ]
      }
    }
  }),
  computed: {
    chartdata() {
      const epochs = Object.keys(this.data)
      const elected = epochs.sort().map((k) => this.data[k].total_seats_used)
      const electedPerShard = epochs.sort().map((k) => this.data[k].externalShards.map((s) => s.external))
      
      const datasets = [0, 1, 2, 3].map((i) => ({
        label: "Shard " + i, //not used in chart
        data: electedPerShard.map((d) => d[i])
      }))

      return {
        labels: epochs,
        datasets
      }
    }
  }
}
</script>

<style>
.chart-container {
  background: white;
  margin-bottom: var(--double);
}
</style>
