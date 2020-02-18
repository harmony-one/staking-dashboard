<template>
  <div>
    <div class="chart-container">
      <ChartBar
        :chartdata="chartdata"
        :options="options"
        style="height: 300px;"
      />
    </div>
    <div class="chart-description">
      Max delegation:
      {{ maxDelegation }}
    </div>
  </div>
</template>

<script>
import ChartBar from "./components/ChartBar"
import moment from "moment"
import { shortDecimals } from "../../../scripts/num"

export default {
  name: "StakeHistoryBlock",
  components: { ChartBar },
  props: ["history", "validator"],
  data: () => ({
    options: {
      plugins: {
        labels: {
          render: () => ""
        }
      },
      responsive: true,
      maintainAspectRatio: false,
      aspectRatio: 3,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: data => "Date: " + data[0].xLabel,
          label: data => {
            return (
              (!data.datasetIndex ? "Self delegated: " : "Delegated: ") +
              shortDecimals(data.yLabel) +
              " ONE"
            )
          }
        }
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
    maxDelegation() {
      return this.validator.max_total_delegation / 1e18 > 0
        ? shortDecimals(this.validator.max_total_delegation / 1e18)
        : "No limit"
    },
    chartdata() {
      return {
        labels: this.history.map(v => moment(v.uctDate).format("hh:mm")),
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
  }
}
</script>

<style>
.chart-container {
  border: 1px solid #dedede;
}
</style>
