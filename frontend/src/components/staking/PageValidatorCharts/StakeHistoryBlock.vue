<template>
  <div class="chart-container">
    <ChartBar v-if="loaded" :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import ChartBar from "./components/ChartBar"

const barChartData = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Self delegated",
      backgroundColor: "hsl(183, 88%, 50%)",
      data: [
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40),
        randomScalingFactor(0, 40)
      ]
    },
    {
      label: "Delegated",
      backgroundColor: "#dedede",
      data: [
        randomScalingFactor(30),
        randomScalingFactor(30),
        randomScalingFactor(30),
        randomScalingFactor(30),
        randomScalingFactor(30),
        randomScalingFactor(30),
        randomScalingFactor(30)
      ]
    }
  ]
}

function randomScalingFactor(min, number) {
  return Math.round(Number(min) + Math.random() * (number || 100))
}

export default {
  name: "StakeHistoryBlock",
  components: { ChartBar },
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
            stacked: true
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