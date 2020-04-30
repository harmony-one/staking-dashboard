<template>
  <div>
    <div class="chart-container">
      <ChartLine
        :chartdata="chartdata"
        :options="options"
        style="height: 300px; width: 100%;"
      />
    </div>
    <div class="chart-description">
      Reward rate show percentage expected return over a fixed time period
    </div>
  </div>
</template>

<script>
import ChartLine from "./components/ChartLine"
import moment from "moment"
import { percent } from "../../../scripts/num"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

export default {
  name: "LineChartContainer",
  components: { ChartLine },
  props: ["history", "validator"],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: data => "Epoch: " + data[0].xLabel,
          label: data => "Rate: " + percent(data.yLabel / 100)
        }
      },
      // hover: {
      //   mode: "nearest",
      //   intersect: true
      // },
      scales: {
        xAxes: [
          {
            display: true
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
              labelString: "Expected Return %"
            }
          }
        ]
      }
    }
  }),
  computed: {
    chartdata() {
      return {
        labels: this.history.map(
          v => v.epoch /* moment(v.uctDate).format("MM.DD") */
        ),
        datasets: [
          {
            label: "Rate",
            borderColor: "#0a93eb",
            fill: false,
            data: this.history.map(v => v.apr * 100)
          }
        ]
      }
    }
  }
}
</script>

<style scoped>
.chart-container {
  border: none;
}
</style>
