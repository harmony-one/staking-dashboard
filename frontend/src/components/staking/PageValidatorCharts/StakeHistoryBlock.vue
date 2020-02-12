<template>
  <div class="chart-container">
    <ChartBar :chartdata="chartdata" :options="options" />
  </div>
</template>

<script>
import ChartBar from "./components/ChartBar"
import moment from 'moment'

export default {
  name: "StakeHistoryBlock",
  components: { ChartBar },
  props: ["history"],
  data: () => ({
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
  computed: {
    chartdata() {
      return {
        labels: this.history.map(v => moment(v.uctDate).format('hh:mm')),
        datasets: [
          {
            label: "Self delegated",
            backgroundColor: "hsl(183, 88%, 50%)",
            data: this.history.map(v => v.self_stake / 1e18)
          },
          {
            label: "Delegated",
            backgroundColor: "#dedede",
            data: this.history.map(v => v.total_stake / 1e18)
          }
        ]
      }
    }
  },
}
</script>

<style>
.chart-container .chartjs-render-monitor {
  height: 340px;
  max-height: 340px;
}
</style>
