<template>
  <div>
    <div class="chart-container">
      <ChartBar
        :chartdata="chartdata"
        :options="options"
        style="height: 300px; width: 100%; max-width: 100vw;"
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
            "Epoch: " + data[0].xLabel,
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
      console.log(this.history);

      return {
        labels: this.history.map(
          v => v.epoch /* moment(v.uctDate).format("MM.DD") */
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
  border: none;
}
</style>
