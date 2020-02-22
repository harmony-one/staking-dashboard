<template>
  <div>
    <div class="chart-container-stake-allocate">
      <div class="legend">{{ timeLeft }}</div>
      <ChartPie
        :chartdata="chartdata"
        :options="options"
        style="height: 250px; width: 250px;"
      />
    </div>
  </div>
</template>

<script>
import ChartPie from "./components/ChartPie"
import { chartColors } from "./components/chartColors"
import moment from "moment"

export default {
  name: "TimePieBlock",
  components: { ChartPie },
  props: ["timeNextEpoch"],
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 50,
      plugins: {
        labels: {
          render: () => ""
        }
      },
      tooltips: {
        enabled: false
      },
      scales: {
        xAxes: [{ display: false }],
        yAxes: [{ display: false }]
      }
    }
  }),
  computed: {
    timeLeft() {
      const leftMin = isNaN(this.timeNextEpoch) ? 0 : this.timeNextEpoch / 60

      return `${Math.floor(leftMin / 60)} hours ${Math.floor(
        leftMin % 60
      )} minutes`
    },
    chartdata() {
      let diff = isNaN(this.timeNextEpoch) ? 0 : 36 - this.timeNextEpoch / 3600

      diff = diff < 0 ? 0 : diff

      return {
        datasets: [
          {
            data: [...Array(12)].map(() => 1),
            backgroundColor: [...Array(12)].map((v, i) =>
              i < Math.floor(diff / 3)
                ? chartColors[0] + "99"
                : chartColors[0] + "20"
            )
          }
        ]
      }
    }
  }
}
</script>

<style>
.chart-container-stake-allocate {
  margin: 5px 0 15px 0;
  height: 300px;
  position: relative;
}

.legend {
  position: absolute;
  max-width: 80px;
  top: 106px;
  left: 84px;
  text-align: center;
}
</style>
