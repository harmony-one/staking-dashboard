<template>
  <div>
    <div class="chart-container">
      <ChartBar
        :chartdata="chartdata"
        :options="options"
        style="height: 300px; width: 100%;"
      />
    </div>
  </div>
</template>

<script>
import ChartBar from "./PageValidatorCharts/components/ChartBar"
import { ones, zeroDecimals } from "../../scripts/num"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

export default {
  name: "SeatAllocationHistory",
  components: { ChartBar },
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
        custom: function(tooltip) {
          if (!tooltip) return;
          tooltip.displayColors = false;
        },
        callbacks: {
          title: (data) => "",
          label: ({datasetIndex, xLabel, yLabel}) => {
            if (datasetIndex === 0) {
              return `${yLabel} seats elected out of`
            }
            return `${yLabel} total seats at ${xLabel}`
          }
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
            stacked: true,
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

      console.log(this.data)
      
      const epochs = Object.keys(this.data)
      const elected = this.data.externalShards.map((s) => s.external)
      const total = this.data.externalShards.map((s) => s.total)

      const shards = [0, 1, 2, 3].map((s) => 'Shard ' + s)

      const colors = data.map((v, i) => {
        return '#00ADE8'
      })
      
      return {
        labels: shards,
        datasets: [
          {
            backgroundColor: colors,
            data: elected
          }, 
          {
            backgroundColor: colors,
            data: total
          }
        ]
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
