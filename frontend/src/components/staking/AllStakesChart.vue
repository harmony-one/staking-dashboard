<template>
  <div>
    <div class="chart-container">
      <ChartLine
        :chartdata="chartdata"
        :options="options"
        style="height: 300px; width: 100%;"
      />
    </div>
  </div>
</template>

<script>
import ChartLine from "./PageValidatorCharts/components/ChartLine"
import { ones } from "../../scripts/num"

// function randomScalingFactor(min, number) {
//   return Math.round(Number(min) + Math.random() * (number || 100))
// }

export default {
  name: "AllStakesChart",
  components: { ChartLine },
  props: ["data"],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      tooltips: {
        mode: "index",
        intersect: false,
        callbacks: {
          title: data => "",
          label: data => "One Staked: " + data.yLabel + " ONE"
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
              display: true
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
      return {
        labels: this.data.map((v, idx) => idx),
        datasets: [
          {
            label: "Staked ONE distribution",
            borderColor: "#0a93eb",
            borderWidth: 3,
            fill: false,
            data: this.data.map(v => ones(v))
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
