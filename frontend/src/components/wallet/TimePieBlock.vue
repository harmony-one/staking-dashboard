<template>
  <div>
    <div class="chart-container-stake-allocate">
      <div v-if="timeLeft" class="legend">{{ timeLeft }}</div>
      <div v-else class="legend">less then <br> 1 minute</div>
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

      if (leftMin < 1) {
        return false
      }

      if (leftMin < 60) {
        return `${Math.floor(leftMin % 60)} minutes`
      }

      return `${Math.floor(leftMin / 60)} hours and ${Math.floor(
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

<style lang="scss">
.chart-container-stake-allocate {
  margin: 5px 0 15px 0;
  height: 300px;
  position: relative;
}

.legend {
  position: absolute;
  width: 120px;
  height: 120px;
  top: 68px;
  left: 65px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-align: center;
}
</style>
