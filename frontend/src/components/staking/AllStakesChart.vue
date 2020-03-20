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
  name: "AllStakesChart",
  components: { ChartBar },
  props: ["data", "median", "networkInfo"],
  data: () => ({
    options: {
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
          label: (data, a, b) => 
            zeroDecimals(data.yLabel) + " ONE Staked"// by " + a.datasets[0].pointRadius({dataIndex: data.index})
        }
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
      const data = this.data.map((v) => Math.floor(ones(v))).reverse()
      const labels = data.map((v, idx) => idx)
      const even = data.length % 2 === 0
      const median = Math.floor(data.length/2)
      const colors = data.map((v, i) => {
        if (even && (i === median || i === median+1)) {
          return '#FF0000'
        } else if (i === median) {
          return '#FF0000'
        }
        // return '#0981cf'
        return '#00ADE8'
      })
      
      return {
        labels,
        datasets: [
          {
            label: "Staked ONE distribution",
            backgroundColor: colors,
            minHeight: 16,
            data,
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
