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
  name: "AllStakesChart",
  components: { ChartLine },
  props: ["data"],
  data: () => ({
    options: {
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
      // hover: {
      //   mode: "nearest",
      //   intersect: true
      // },
      scales: {
        xAxes: [
          {
            display: true,
            gridLines: {
              display: true
            }
          }
        ],
        yAxes: [
          {
            display: true,
            gridLines: {
              display: true
            }
          }
        ]
      }
    }
  }),
  computed: {
    chartdata() {
      // const raw = this.data.map((v) => ones(v))
      // const cache = []
      // const data = raw.sort((a, b) => a - b).filter((value) => {
      //   const cached = cache.find((d) => d.value === value)
      //   if (!cached) {
      //     cache.push({ value, count: 1 })
      //     return true
      //   } else {
      //     cached.count++
      //   }
      //   return false
      // })
      // const count = cache.map((c) => c.count)
      
      const data = this.data.map((v) => ones(v))
      const labels = data.map((v, idx) => idx)

      return {
        labels,
        datasets: [
          {
            label: "Staked ONE distribution",
            borderColor: "#0a93eb",
            borderWidth: 2,
            fill: false,
            pointRadius: 5,
            // pointRadius: function(context) {
            //   return count[context.dataIndex]
            // },
            data
          }
        ]
      }
    }
  }
}
</script>

<style>
.chart-container {
  padding: var(--unit);
  border-radius: var(--half);
  border: 1px solid $light2;
}
</style>
