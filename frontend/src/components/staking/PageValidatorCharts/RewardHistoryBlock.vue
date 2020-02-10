<template>
  <div class="chart-container">
    <ChartLine v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import ChartLine from "./components/ChartLine"

const barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Rate",
      borderColor: "#0a93eb",
      data: [
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40)
      ],
      fill: false
    }
  ]
}

function randomScalingFactor(min, number) {
  return Math.round(Number(min) + Math.random() * (number || 100))
}

export default {
  name: "LineChartContainer",
  components: { ChartLine },
  data: () => ({
    loaded: false,
    chartdata: barChartData,
    options: {
      tooltips: {
        mode: "index",
        intersect: false
      },
      // responsive: true,
      scales: {
        xAxes: [
          {
            stacked: true
          }
        ],
        yAxes: [
          {
            ticks: {
              min: 0,
              // max: 100,
              callback: function(value) {
                return value + "%"
              }
            },
            scaleLabel: {
              display: true,
              labelString: "Rate, %"
            }
          }
        ]
      }
    }
  }),
  async mounted() {
    this.loaded = false
    try {
      // const { userlist } = await fetch("/api/userlist")
      this.chartdata = barChartData
      this.loaded = true
    } catch (e) {
      console.error(e)
    }
  }
}
</script>

<style>
.chart-container .chartjs-render-monitor {
  height: 340px;
  max-height: 340px;
}
</style>
