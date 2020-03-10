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
import { shortDecimals, ones } from "scripts/num"
import numeral from "numeral"

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
          title: data =>
            "Date: " + moment(data[0].xLabel).format("MMM DD, hh:mm"),
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
            stacked: true,
            ticks: {
              callback: value => moment(value).format("MM.DD")
            }
          }
        ],
        yAxes: [
          {
            stacked: true,
            ticks: {
              callback: value => numeral(value).format("0a")
            }
          }
        ]
      }
    }
  }),
  computed: {
    maxDelegation() {
      return ones(this.validator.max_total_delegation) > 0
        ? shortDecimals(ones(this.validator.max_total_delegation))
        : "No limit"
    },
    chartdata() {
      return {
        labels: this.history.map(
          v => v.uctDate /* moment(v.uctDate).format("MM.DD") */
        ),
        datasets: [
          {
            label: "Self delegated",
            backgroundColor: "hsl(183, 88%, 50%)",
            data: this.history.map(v => ones(v.self_stake))
          },
          {
            label: "Delegated",
            backgroundColor: "#dedede",
            data: this.history.map(v => ones(v.total_stake - v.self_stake))
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
