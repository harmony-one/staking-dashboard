<template>
  <div>
    <div class="chart-container">
      <ChartLine :chartdata="chartdata" :options="options" />
    </div>
    <div class="chart-description">
      Reward rate show percentage expected return over a fixed time period
    </div>
  </div>
</template>

<script>
import ChartLine from "./components/ChartLine"
import moment from "moment"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

export default {
  name: "LineChartContainer",
  components: { ChartLine },
  props: ["history", "validator"],
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
  computed: {
    chartdata() {
      return {
        labels: this.history.map(v => moment(v.uctDate).format("hh:mm")),
        datasets: [
          {
            label: "Rate",
            borderColor: "#0a93eb",
            data: this.history.map(
              v => Math.round(v.commission.rate * 10000) / 100
            )
          }
        ]
      }
    }
  }
}
</script>
