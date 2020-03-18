
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
export default {
  name: "AllStakesChart",
  components: { ChartBar },
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
            zeroDecimals(data.yLabel) + " ONE Staked"
        }
      },
      plugins: {
        labels: {
          render: () => {}
        }
      },
      ticks: {
        afterUpdate: () => {
          const el = document.querySelector('#bar-chart')
          console.log(el)
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
              display: false
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
      const raw = this.data.map((v) => ones(v))
      const cache = []
      // previous
      const data = raw.slice().reverse()
      const median = data[Math.floor(data.length / 2)]
      console.log(median)
      
      // new
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
      const labels = data.map((v, idx) => idx + 1)
      return {
        labels,
        datasets: [
          {
            barPercentage: 1.01,
            categoryPercentage: 1.01,
            // barThickness: 6,
            // maxBarThickness: 8,
            minBarLength: 8,
            label: "Staked ONE distribution",
            backgroundColor: "#0a93eb",
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