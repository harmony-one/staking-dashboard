
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
<<<<<<< HEAD
import ChartLine from "./PageValidatorCharts/components/ChartLine"
import { ones, zeroDecimals } from "../../scripts/num"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

=======
import ChartBar from "./PageValidatorCharts/components/ChartBar"
import { ones, zeroDecimals } from "../../scripts/num"
>>>>>>> update allstakeschart
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
<<<<<<< HEAD
            zeroDecimals(data.yLabel) + " ONE Staked"// by " + a.datasets[0].pointRadius({dataIndex: data.index})
=======
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
>>>>>>> update allstakeschart
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
<<<<<<< HEAD
      // const raw = this.data.map((v) => ones(v))
      // const cache = []
=======
      const raw = this.data.map((v) => ones(v))
      const cache = []
      // previous
      const data = raw.slice().reverse()
      const median = data[Math.floor(data.length / 2)]
      console.log(median)
      
      // new
>>>>>>> update allstakeschart
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
<<<<<<< HEAD
      
      const data = this.data.map((v) => ones(v))
      const labels = data.map((v, idx) => idx)

=======
      const labels = data.map((v, idx) => idx + 1)
>>>>>>> update allstakeschart
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
<<<<<<< HEAD
            borderColor: "#0a93eb",
            borderWidth: 2,
            fill: false,
            pointRadius: 5,
            // pointRadius: function(context) {
            //   return count[context.dataIndex]
            // },
=======
            backgroundColor: "#0a93eb",
>>>>>>> update allstakeschart
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