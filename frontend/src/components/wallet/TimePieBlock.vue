<template>
  <div>
    <div class="chart-container-stake-allocate">
      <ChartPie
        :chartdata="chartdata"
        :options="options"
        style="height: 200px; width: 200px; margin: auto"
      />
    </div>
    <div class="legend">{{ timeNextEpoch / 60 | timeLeft }}</div>
  </div>
</template>

<script>
import ChartPie from "./components/ChartPie"
import { chartColors } from "./components/chartColors"
import { timeLeft } from '@/filters'

export default {
  name: "TimePieBlock",
  components: { ChartPie },
  props: ["timeNextEpoch"],
  filters: {
    timeLeft,
  },
  data: () => ({
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutoutPercentage: 92,
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
  margin: var(--unit) auto;
  position: relative;
}

/*
.legend {
  font-size: 0.8rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 15px;
  width: 120px;
  height: 120px;
  top: 70px;
  left: 65px;
}
 */

.legend {
  margin-top: -122px;
  padding-bottom: 100px;
  width: 100%;
  text-align: center;
}

</style>
